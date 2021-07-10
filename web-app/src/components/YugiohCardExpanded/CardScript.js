import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";

import ScriptName from "./ScriptName.js";
import { moveCard, createTokens, shuffleDeck } from "stateStore/actions/field.js";
import { filterDeck } from "stateStore/actions/scripts.js";
import { GRAVEYARD, HAND, BANISHED, DECK, ST, SEARCH_DECK, BANISH_ALL, MILL_UNTIL, TOKENS, RANDOM_DISCARD } from "utils/constants";
import getCardDetails from "utils/getCardDetails.js";

class CardScript extends PureComponent {
   runScript = (name, params) => {
      const { heroPlayer } = this.props;
      switch (name) {
         case SEARCH_DECK:
            this.props.filterDeck(params);
            break;
         case BANISH_ALL:
            this.banishAll();
            break;
         case MILL_UNTIL:
            this.millUntil(params);
            break;
         case TOKENS:
            this.props.createTokens(heroPlayer, params);
            break;
         case RANDOM_DISCARD:
            this.randomDiscard();
            break;
         default:
            console.log("Error: Undefined card script");
      }
   };

   banishAll = () => {
      const { moveCard, shuffleDeck, heroPlayer } = this.props;
      const deck = this.props.field[heroPlayer].deck;

      for (let i = 0; i < deck.length; i++) {
         const card = deck[i];
         if (card && card.name === this.props.activeCard.name) {
            moveCard({
               from: { player: heroPlayer, row: DECK, zone: i },
               to: { player: heroPlayer, row: BANISHED, zone: 0 }
            });
            i--;
         }
      }
      moveCard({ from: this.props.activeCard, to: { player: heroPlayer, row: BANISHED, zone: 0 } });
      shuffleDeck();
   };

   millUntil = (params) => {
      const { field, heroPlayer, moveCard } = this.props;
      const deck = field[heroPlayer].deck;

      for (let i = deck.length - 1, stop = false; i >= 0 && !stop; i--) {
         const card = deck[i];
         const cardDetails = card && getCardDetails(card.name);

         if (params === ST) {
            if (isNaN(cardDetails.atk)) stop = true;
         }

         moveCard({
            from: { player: heroPlayer, row: DECK, zone: i },
            to: { player: heroPlayer, row: GRAVEYARD, zone: 0 }
         });
      }
   };

   randomDiscard = () => {
      const { field, heroPlayer, moveCard } = this.props;
      const handLength = field[heroPlayer].hand.length;

      if (handLength > 0) {
         const zone = Math.floor(Math.random() * (handLength - 1));
         moveCard({
            from: { player: heroPlayer, row: HAND, zone },
            to: { player: heroPlayer, row: GRAVEYARD, zone: 0 }
         });
      }
   };

   render() {
      const { script, variant, field } = this.props;
      const [name, params] = script.split(":");

      if (variant && !fieldContains(field, variant)) return <Fragment></Fragment>;

      return (
         <Button color="primary" onClick={() => this.runScript(name, params)}>
            <ScriptName scriptName={name} />
         </Button>
      );
   }
}

function fieldContains(field, card) {
   switch (card) {
      case "Nobleman of Crossout":
         for (const key in field) for (const zone of field[key][ST]) if (zone && !zone.facedown && zone.name === card) return true;
         return false;
      default:
         return false;
   }
}

function mapStateToProps(state) {
   return { field: state.field };
}

CardScript.propTypes = {
   script: PropTypes.string.isRequired,
   variant: PropTypes.string,
   activeCard: PropTypes.object,
   heroPlayer: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { filterDeck, moveCard, createTokens, shuffleDeck })(CardScript);
