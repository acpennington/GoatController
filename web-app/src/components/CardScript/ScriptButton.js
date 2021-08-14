import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import { WebSocketContext } from "views/Game/WebSocketContext.js";
import Button from "components/CustomButtons/Button.js";
import ScriptName from "./ScriptName.js";
import { moveCard, createTokens, discardAndDraw } from "stateStore/actions/game/field.js";
import { addMessage } from "stateStore/actions/game/chat.js";
import { filterDeck, millUntil, banishAll } from "stateStore/actions/game/scripts.js";

import Tooltip from "@material-ui/core/Tooltip";

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
   DISCARD_AND_DRAW
} from "utils/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";

class CardScript extends PureComponent {
   componentDidMount() {
      const { variant, script } = this.props;

      if (!variant) bind("s", () => this.runScript(script));
   }

   componentWillUnmount() {
      unbind(["s"]);
   }

   runScript = (script) => {
      const { field, activeCard, banishAll, heroPlayer, variant, filterDeck, millUntil, createTokens, discardAndDraw } = this.props;
      const { name, params } = script;
      const socket = this.context;
      switch (name) {
         case SEARCH_DECK:
            filterDeck(heroPlayer, script);
            break;
         case BANISH_ALL:
            banishAll(field, heroPlayer, activeCard, variant, socket);
            break;
         case MILL_UNTIL:
            millUntil(heroPlayer, this.props.field[heroPlayer].deck, params, socket);
            break;
         case TOKENS:
            createTokens(heroPlayer, params, socket);
            break;
         case RANDOM_DISCARD:
            this.randomDiscard();
            break;
         case FLIP_COINS:
            this.flipCoins(params);
            break;
         case ROLL_DICE:
            this.rollDice(params);
            break;
         case DISCARD_AND_DRAW:
            discardAndDraw(heroPlayer, params, socket);
            break;
         default:
            console.log("Error: Undefined card script");
      }
   };

   randomDiscard = () => {
      const { field, heroPlayer, moveCard } = this.props;
      const handLength = field[heroPlayer].hand.length;

      if (handLength > 0) {
         const zone = Math.floor(Math.random() * (handLength - 1));
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

      const message = `${heroPlayer} flipped ${count} coins; ${heads} came up heads and ${tails} came up tails.`;
      addMessage("Game", message, this.context);
   };

   rollDice = (count) => {
      const { heroPlayer, addMessage } = this.props;
      const results = [];

      for (let i = 0; i < count; i++) results.push(Math.ceil(Math.random() * 6));

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
      const { classes, script, variant, field } = this.props;
      const { tooltip } = script;

      if (variant && !fieldContains(field, variant)) return null;

      const button = (
         <Button color="primary" onClick={() => this.runScript(script)}>
            <ScriptName scriptName={script.name} />
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
      case "Nobleman of Crossout":
         for (const key in field) for (const zone of field[key][SPELL_TRAP]) if (zone && !zone.facedown && zone.name === card) return true;
         return false;
      default:
         return false;
   }
}

function mapStateToProps(state) {
   return { field: state.field };
}

CardScript.propTypes = {
   classes: PropTypes.object.isRequired,
   script: PropTypes.object.isRequired,
   heroPlayer: PropTypes.string.isRequired,
   variant: PropTypes.string,
   activeCard: PropTypes.object
};

CardScript.contextType = WebSocketContext;

export default connect(mapStateToProps, { filterDeck, moveCard, createTokens, millUntil, banishAll, addMessage, discardAndDraw })(
   withStyles(styles)(CardScript)
);
