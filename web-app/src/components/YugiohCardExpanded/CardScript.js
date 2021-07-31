import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { WebSocketContext } from "views/Game/WebSocketContext.js";
import Button from "components/CustomButtons/Button.js";
import ScriptName from "./ScriptName.js";
import { moveCard, createTokens } from "stateStore/actions/game/field.js";
import { addMessage } from "stateStore/actions/game/chat.js";
import { filterDeck, millUntil, banishAll } from "stateStore/actions/game/scripts.js";

import { GRAVEYARD, HAND, SPELL_TRAP, SEARCH_DECK, BANISH_ALL, MILL_UNTIL, TOKENS, RANDOM_DISCARD, FLIP_COINS } from "utils/constants";

class CardScript extends PureComponent {
   runScript = (script) => {
      const { field, activeCard, banishAll, heroPlayer, variant } = this.props;
      const { name, params } = script;
      const socket = this.context;
      switch (name) {
         case SEARCH_DECK:
            this.props.filterDeck(heroPlayer, script);
            break;
         case BANISH_ALL:
            banishAll(field, heroPlayer, activeCard, variant, socket);
            break;
         case MILL_UNTIL:
            this.props.millUntil(heroPlayer, this.props.field[heroPlayer].deck, params, socket);
            break;
         case TOKENS:
            this.props.createTokens(heroPlayer, params, socket);
            break;
         case RANDOM_DISCARD:
            this.randomDiscard();
            break;
         case FLIP_COINS:
            this.flipCoins(params);
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

   render() {
      const { script, variant, field } = this.props;

      if (variant && !fieldContains(field, variant)) return <Fragment></Fragment>;

      return (
         <Button color="primary" onClick={() => this.runScript(script)}>
            <ScriptName scriptName={script.name} />
         </Button>
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
   script: PropTypes.object.isRequired,
   variant: PropTypes.string,
   activeCard: PropTypes.object,
   heroPlayer: PropTypes.string.isRequired
};

CardScript.contextType = WebSocketContext;

export default connect(mapStateToProps, { filterDeck, moveCard, createTokens, millUntil, banishAll, addMessage })(CardScript);
