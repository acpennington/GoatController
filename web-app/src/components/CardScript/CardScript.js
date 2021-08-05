import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScriptButton from "./ScriptButton.js";
import getCardDetails from "utils/getCardDetails.js";

import { FACEDOWN_CARD, BANISH_ALL, HERO, VILLAIN } from "utils/constants";

class CardScript extends PureComponent {
   validScript = (activeCard, cardPlayer, script) => {
      const { heroPlayer } = this.props;
      const { displayCondition } = script;
      if (displayCondition) {
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
      const { hoverCard, selectedCard, heroPlayer } = this.props;

      const activeCard = selectedCard || hoverCard;
      const player = activeCard && activeCard.player;
      const cardName = rename(activeCard);

      if (!cardName) return null;

      const { text, script } = getCardDetails(cardName);

      return (
         <Fragment>
            {script && this.validScript(activeCard, player, script) && <ScriptButton script={script} heroPlayer={heroPlayer} />}
            {text.includes("/Flip/") && (
               <ScriptButton script={{ name: BANISH_ALL }} variant="Nobleman of Crossout" activeCard={activeCard} heroPlayer={heroPlayer} />
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
   return { hoverCard: state.hoverCard, selectedCard: state.selectedCard[ownProps.heroPlayer] };
}

export default connect(mapStateToProps)(CardScript);
