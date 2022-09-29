import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScriptButton from "./ScriptButton.js";
import getCardDetails from "shared/getCardDetails.js";
import checkParams from "utils/checkParams.js";

import { expandDeck } from "shared/reformatDeck.js";
import { FACEDOWN_CARD, BANISH_ALL, HERO, VILLAIN, TRAP, SEARCH_DECK, DECK, BANISHED, MONSTER, SPELL_TRAP } from "shared/constants";

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
         const deckArray = Array.isArray(deck) ? deck : expandDeck(deck.cards);
         for (const name in deckArray) {
            const { fail, pass } = checkParams(deckArray[name], script.params);
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

      const { cardType, atk, text, script, script2, prepopLP } = getCardDetails(cardName);
      const focus = !(prepopLP && (player === heroPlayer ? prepopLP.hero : prepopLP.villain));

      const validScript = script && this.validScript(activeCard, player, script);
      const validScript2 = script2 && this.validScript(activeCard, player, script2);

      return (
         <Fragment>
            {validScript && <ScriptButton script={script} heroPlayer={heroPlayer} activeCard={activeCard} focus={focus} />}
            {validScript2 && <ScriptButton script={script2} heroPlayer={heroPlayer} activeCard={activeCard} focus={focus && !validScript} />}
            {[BANISHED, MONSTER].includes(activeCard.row) && text.includes("/Flip/") && (
               <ScriptButton
                  script={{ name: BANISH_ALL }}
                  variant="Nobleman of Crossout"
                  activeCard={activeCard}
                  heroPlayer={heroPlayer}
                  focus={focus && !validScript && !validScript2}
               />
            )}
            {[BANISHED, SPELL_TRAP].includes(activeCard.row) && cardType === TRAP && (
               <ScriptButton
                  script={{ name: BANISH_ALL }}
                  variant="Nobleman of Extermination"
                  activeCard={activeCard}
                  heroPlayer={heroPlayer}
                  focus={focus && !validScript && !validScript2}
               />
            )}
            {[BANISHED, MONSTER].includes(activeCard.row) && cardType.includes("Monster") && atk <= 2000 && (
               <ScriptButton
                  script={{ name: BANISH_ALL, params: true }}
                  variant="Chain Destruction"
                  activeCard={activeCard}
                  heroPlayer={heroPlayer}
                  focus={focus && !validScript && !validScript2}
               />
            )}
            {[BANISHED, MONSTER].includes(activeCard.row) && cardType.includes("Monster") && atk <= 1000 && (
               <ScriptButton
                  script={{ name: BANISH_ALL, params: true }}
                  variant="Chain Disappearance"
                  activeCard={activeCard}
                  heroPlayer={heroPlayer}
                  focus={focus && !validScript && !validScript2}
               />
            )}
         </Fragment>
      );
   }
}

function rename(card) {
   return card && card.name !== FACEDOWN_CARD && card.name;
}

function mapStateToProps(state, ownProps) {
   return {
      activeCard: state.selectedCard[ownProps.heroPlayer] || state.hoverCard,
      deck: state.field[ownProps.heroPlayer][DECK]
   };
}

CardScript.propTypes = {
   heroPlayer: PropTypes.string.isRequired,
   activeCard: PropTypes.object,
   deck: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default connect(mapStateToProps)(CardScript);
