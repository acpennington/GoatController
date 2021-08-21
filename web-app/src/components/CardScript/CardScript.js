import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScriptButton from "./ScriptButton.js";
import getCardDetails from "utils/getCardDetails.js";

import { FACEDOWN_CARD, BANISH_ALL, HERO, VILLAIN, TRAP } from "utils/constants";

class CardScript extends PureComponent {
   validScript = (activeCard, cardPlayer, script) => {
      const { heroPlayer } = this.props;
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

      return true;
   };

   render() {
      const { activeCard, heroPlayer } = this.props;

      const player = activeCard && activeCard.player;
      const cardName = rename(activeCard);

      if (!cardName) return null;

      const { cardType, text, script } = getCardDetails(cardName);

      return (
         <Fragment>
            {script && this.validScript(activeCard, player, script) && (
               <ScriptButton script={script} heroPlayer={heroPlayer} cardName={cardName} activeCard={activeCard} />
            )}
            {text.includes("/Flip/") && (
               <ScriptButton script={{ name: BANISH_ALL }} variant="Nobleman of Crossout" activeCard={activeCard} heroPlayer={heroPlayer} />
            )}
            {cardType === TRAP && (
               <ScriptButton script={{ name: BANISH_ALL }} variant="Nobleman of Extermination" activeCard={activeCard} heroPlayer={heroPlayer} />
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
   return { activeCard: state.selectedCard[ownProps.heroPlayer] || state.hoverCard };
}

export default connect(mapStateToProps)(CardScript);
