import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RenderCards from "components/RenderCards/RenderCards.js";
import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";
import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import getCardDetails from "utils/getCardDetails";
import { SEARCH_RESULTS } from "utils/constants.js";

class CardsToRender extends Component {
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
      const { player, height } = this.props;

      const cardHeight = this.context / 7;
      const cardsToRender = this.updateResults();

      return <RenderCards cardsToRender={cardsToRender} height={height} cardHeight={cardHeight} player={player} decklist />;
   }
}

function mapStateToProps(state) {
   return { searchResults: state.searchResults, maindeck: state.decklist.maindeck, sidedeck: state.decklist.sidedeck };
}

CardsToRender.propTypes = {
   player: PropTypes.string.isRequired,
   height: PropTypes.number.isRequired
};

CardsToRender.contextType = SizeContext;

export default connect(mapStateToProps, { newResults })(CardsToRender);
