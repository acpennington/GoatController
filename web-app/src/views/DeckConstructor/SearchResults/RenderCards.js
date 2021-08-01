import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DecklistCard from "components/YugiohCard/DecklistCard.js";
import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";
import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import getCardDetails from "utils/getCardDetails";
import { SEARCH_RESULTS } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/searchResults.js";

class RenderCards extends Component {
   componentDidUpdate() {
      const cardsToRender = this.updateResults();
      if (Object.keys(cardsToRender).length < 1) this.props.newResults([]);
   }

   updateResults = () => {
      const { searchResults, maindeck, sidedeck } = this.props;
      const cardsToRender = {};

      for (const cardName of searchResults) {
         const quantity = (getCardDetails(cardName).limit || 3) - (maindeck[cardName] || 0) - (sidedeck[cardName] || 0);
         if (quantity > 0) cardsToRender[cardName] = quantity;
      }

      return cardsToRender;
   };

   render() {
      const { classes, player, height } = this.props;

      const cardHeight = this.context / 7;
      const cardsToRender = this.updateResults();

      const cards = [];
      let i = 0;
      for (const cardName in cardsToRender) {
         cards.push(
            <DecklistCard height={cardHeight} player={player} location={SEARCH_RESULTS} name={cardName} quantity={cardsToRender[cardName]} zone={i} key={i} />
         );
         i++;
      }

      return (
         <div className={classes.cards} style={cards.length > 12 ? { height } : {}}>
            {cards}
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { searchResults: state.searchResults, maindeck: state.decklist.maindeck, sidedeck: state.decklist.sidedeck };
}

RenderCards.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired,
   height: PropTypes.number.isRequired
};

RenderCards.contextType = SizeContext;

export default connect(mapStateToProps, { newResults })(withStyles(styles)(RenderCards));
