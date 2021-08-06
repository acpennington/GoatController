import React, { Component } from "react";
import PropTypes from "prop-types";

import DecklistCard from "components/YugiohCard/DecklistCard.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";

import { SEARCH_RESULTS } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/renderCardsStyle.js";

class RenderCards extends Component {
   render() {
      const { classes, maxHeight, cardHeight, cardsToRender, decklist, player, row, isHero } = this.props;
      const cards = [];

      let i = 0;
      for (const card of cardsToRender) {
         if (decklist)
            cards.push(
               <DecklistCard height={cardHeight} player={player} location={SEARCH_RESULTS} name={card.name} quantity={card.quantity} zone={i} key={i} />
            );
         else
            cards.push(
               <YugiohCard height={cardHeight} player={player} row={row} zone={card.zone} cardName={card.name} notFull modal isHero={isHero} key={i} />
            );
         i++;
      }

      return (
         <div className={classes.cards} style={cards.length > 12 ? { height: maxHeight } : {}}>
            {cards}
         </div>
      );
   }
}

RenderCards.propTypes = {
   classes: PropTypes.object.isRequired,
   maxHeight: PropTypes.number.isRequired,
   cardHeight: PropTypes.number.isRequired,
   cardsToRender: PropTypes.array.isRequired,
   player: PropTypes.string.isRequired,
   row: PropTypes.string,
   decklist: PropTypes.bool,
   isHero: PropTypes.bool
};

export default withStyles(styles)(RenderCards);
