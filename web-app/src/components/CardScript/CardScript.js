import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScriptButton from "./ScriptButton.js";
import getCardDetails from "shared/getCardDetails.js";
import checkParams from "utils/checkParams.js";

import { FACEDOWN_CARD, BANISH_ALL, HERO, VILLAIN, TRAP, SEARCH_DECK, DECK } from "shared/constants";

class CardScript extends PureComponent {
   validScript = (activeCard, cardPlayer, script) => {
      const { deck, heroPlayer } = this.props;
      const { displayCondition } = script;
      if (displayCondition) {
         if (activeCard.facedown) return false;
         for (const condition in displayCondition) {
            if (condition === "players") {
               const playerLegal = displayCondition.players.includes(cardPlayer === heroPlayer ? HERO : VILLAIN);
               if (!playerLegal) return false;
            } else {
               const doesConditionMatch = displayCondition[condition] === activeCard[condition];
               if (!doesConditionMatch) return false;
            }
         }
      }

      if (script.name === SEARCH_DECK && script.params) {
         for (const name in deck) {
            const { fail, pass } = checkParams(deck[name], script.params);
            if (script.oneParam ? pass.length > 0 : fail.length === 0) return true;
         }
         return false;
      }

      return true;
   };

   render() {
      const { activeCard, heroPlayer } = this.props;

      const player = activeCard && activeCard.player;
      const cardName = rename(activeCard);

      if (!cardName) return null;

      const { cardType, text, script, prepopLP } = getCardDetails(cardName);
      const focus = !(prepopLP && (player === heroPlayer ? prepopLP.hero : prepopLP.villain));

      return (
         <Fragment>
            {script && this.validScript(activeCard, player, script) && (
               <ScriptButton script={script} heroPlayer={heroPlayer} cardName={cardName} activeCard={activeCard} focus={focus} />
            )}
            {text.includes("/Flip/") && (
               <ScriptButton script={{ name: BANISH_ALL }} variant="Nobleman of Crossout" activeCard={activeCard} heroPlayer={heroPlayer} focus={focus} />
            )}
            {cardType === TRAP && (
               <ScriptButton script={{ name: BANISH_ALL }} variant="Nobleman of Extermination" activeCard={activeCard} heroPlayer={heroPlayer} focus={focus} />
            )}
         </Fragment>
      );
   }
}

function rename(card) {
   return card && card.name !== FACEDOWN_CARD && card.name;
}

CardScript.propTypes = {
   heroPlayer: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
   return {
      activeCard: state.selectedCard[ownProps.heroPlayer] || state.hoverCard,
      deck: state.field[ownProps.heroPlayer][DECK]
  };
}

export default connect(mapStateToProps)(CardScript);
