import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { WebSocketContext } from "views/Game/WebSocketContext.js";
import ScriptName from "./ScriptName.js";
import { moveCard, createTokens, discardAndDraw, shuffleAndDraw, drawCard } from "stateStore/actions/game/field.js";
import { addMessage } from "stateStore/actions/game/chat.js";
import { filterDeck, millUntil, banishAll } from "stateStore/actions/game/scripts.js";
import { playSound } from "stateStore/actions/game/field.js";
import compress from "utils/compressName.js";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "components/Tooltip/PatchedTooltip.js";

import {
   GRAVEYARD,
   HAND,
   SPELL_TRAP,
   SEARCH_DECK,
   BANISH_ALL,
   MILL_UNTIL,
   TOKENS,
   RANDOM_DISCARD,
   FLIP_COINS,
   ROLL_DICE,
   DISCARD_AND_DRAW,
   SHUFFLE_AND_DRAW,
   SKIP_DRAWS,
   DRAW_N
} from "shared/constants.js";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";

class ScriptButton extends PureComponent {
   constructor(props) {
      super(props);
      this.ref = React.createRef();
      this.action = React.createRef();
   }

   componentDidMount() {
      this.maybeFocus();
   }

   componentDidUpdate() {
      this.maybeFocus();
   }

   maybeFocus() {
      const { focus } = this.props;

      if (focus) {
         if (this.ref.current) this.ref.current.focus();
         if (this.action.current) this.action.current.focusVisible();
      }
   }

   runScript = () => {
      const { field, activeCard, banishAll, heroPlayer, variant, filterDeck, millUntil, createTokens, discardAndDraw, shuffleAndDraw, drawCard, script } =
         this.props;
      const { name, params } = script;
      const socket = this.context;
      switch (name) {
         case SEARCH_DECK:
            filterDeck(heroPlayer, script, activeCard.name, socket);
            break;
         case BANISH_ALL:
            banishAll(field, heroPlayer, activeCard, variant, params, socket);
            break;
         case MILL_UNTIL:
            millUntil(heroPlayer, this.props.field[heroPlayer].deck, params, socket);
            break;
         case TOKENS:
            createTokens(heroPlayer, params, socket);
            break;
         case RANDOM_DISCARD:
            this.randomDiscard(params);
            break;
         case FLIP_COINS:
            this.flipCoins(params);
            break;
         case ROLL_DICE:
            this.rollDice(params);
            break;
         case DRAW_N:
            drawCard(heroPlayer, params, socket);
            break;
         case DISCARD_AND_DRAW:
            discardAndDraw(heroPlayer, params, socket);
            break;
         case SHUFFLE_AND_DRAW:
            shuffleAndDraw(heroPlayer, params, socket);
            break;
         case SKIP_DRAWS:
            this.skipDraws(params);
            break;
         default:
            console.log("Error: Undefined card script");
      }
   };

   skipDraws = (count) => {
      const { field, heroPlayer, addMessage } = this.props;
      const skipped = (field[heroPlayer].skippedDraws = Math.max(field[heroPlayer].skippedDraws, count));
      const message = `${heroPlayer} is skipping their next${skipped > 1 ? ` ${skipped}` : ""} Draw Phase${skipped > 1 ? "s" : ""}.`;
      addMessage("Game", message, this.context);
   };

   randomDiscard = (count) => {
      const { field, heroPlayer, moveCard } = this.props;
      const hand = field[heroPlayer].hand;

      for (let i = count || 1; i > 0 && hand.length > 0; i--) {
         const zone = Math.floor(Math.random() * (hand.length - 1));
         moveCard(
            {
               from: { player: heroPlayer, row: HAND, zone },
               to: { player: heroPlayer, row: GRAVEYARD, zone: 0 }
            },
            // NOTE: this gets turned into <b>randomly</b> by the client.
            { ...this.context, msg: "RANDOMLY" }
         );
      }
   };

   flipCoins = (count) => {
      const { heroPlayer, addMessage } = this.props;
      let heads = 0,
         tails = 0;

      for (let i = 0; i < count; i++) {
         if (Math.random() > 0.5) heads++;
         else tails++;
      }

      playSound("/sounds/coin.mp3");

      const message = `${heroPlayer} flipped ${count} coins; ${heads} came up heads and ${tails} came up tails.`;
      addMessage("Game", message, this.context);
   };

   rollDice = (count) => {
      const { heroPlayer, addMessage } = this.props;
      const results = [];

      for (let i = 0; i < count; i++) results.push(Math.ceil(Math.random() * 6));

      playSound("/sounds/dice.mp3");

      const message =
         heroPlayer +
         " rolled " +
         (count === 1 ? " a die." : count + " dice.") +
         " The result" +
         (count === 1 ? " was " + results[0] : "s were " + results[0] + " and " + results[1]) +
         ".";
      addMessage("Game", message, this.context);
   };

   render() {
      const { classes, script, variant, field, activeCard } = this.props;
      const { tooltip, params } = script;

      if (variant && !fieldContains(field, variant)) return null;

      const button = (
         <Button
            action={this.action}
            color="primary"
            onClick={this.runScript}
            style={
               activeCard && activeCard.name
                  ? {
                       backgroundImage:
                          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/' + compress(variant || activeCard.name) + '.jpg")',
                       width: "97.5%"
                    }
                  : { width: "97.5%" }
            }
            round
         >
            <ScriptName scriptName={script.name} params={params} />
         </Button>
      );

      return tooltip ? (
         <Tooltip title={tooltip} classes={{ tooltip: classes.tooltip }}>
            {button}
         </Tooltip>
      ) : (
         button
      );
   }
}

function fieldContains(field, card) {
   switch (card) {
      case "Nobleman of Extermination":
      case "Nobleman of Crossout":
      case "Chain Destruction":
      case "Chain Disappearance":
         for (const key in field) for (const zone of field[key][SPELL_TRAP]) if (zone && !zone.facedown && zone.name === card) return true;
         return false;
      default:
         return false;
   }
}

function mapStateToProps(state) {
   return { field: state.field };
}

ScriptButton.propTypes = {
   classes: PropTypes.object.isRequired,
   script: PropTypes.object.isRequired,
   heroPlayer: PropTypes.string.isRequired,
   activeCard: PropTypes.object.isRequired,
   variant: PropTypes.string,
   focus: PropTypes.bool,
   field: PropTypes.object.isRequired,
   filterDeck: PropTypes.func.isRequired,
   moveCard: PropTypes.func.isRequired,
   drawCard: PropTypes.func.isRequired,
   createTokens: PropTypes.func.isRequired,
   millUntil: PropTypes.func.isRequired,
   banishAll: PropTypes.func.isRequired,
   addMessage: PropTypes.func.isRequired,
   discardAndDraw: PropTypes.func.isRequired,
   shuffleAndDraw: PropTypes.func.isRequired
};

ScriptButton.contextType = WebSocketContext;

export default connect(mapStateToProps, { filterDeck, moveCard, createTokens, millUntil, banishAll, addMessage, discardAndDraw, shuffleAndDraw, drawCard })(
   withStyles(styles)(ScriptButton)
);
