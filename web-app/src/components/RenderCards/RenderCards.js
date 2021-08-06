import React, { Component } from "react";
import PropTypes from "prop-types";

import DecklistCard from "components/YugiohCard/DecklistCard.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";

import { SEARCH_RESULTS } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/renderCardsStyle.js";

class RenderCards extends Component {
   render() {
      const { classes, height, cardHeight, cardsToRender, decklist, player } = this.props;
      const cards = [];

      let i = 0;
      for (const cardName in cardsToRender) {
         if (decklist) {
            cards.push(
               <DecklistCard
                  height={cardHeight}
                  player={player}
                  location={SEARCH_RESULTS}
                  name={cardName}
                  quantity={cardsToRender[cardName]}
                  zone={i}
                  key={i}
               />
            );
            i++;
         } else return;
      }

      return (
         <div className={classes.cards} style={cards.length > 12 ? { height } : {}}>
            {cards}
         </div>
      );
   }
}

RenderCards.propTypes = {
   classes: PropTypes.object.isRequired,
   height: PropTypes.number.isRequired,
   cardHeight: PropTypes.number.isRequired,
   cardsToRender: PropTypes.object.isRequired,
   decklist: PropTypes.bool,
   player: PropTypes.string
};

export default withStyles(styles)(RenderCards);
