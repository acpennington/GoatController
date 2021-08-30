import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RenderCards from "components/RenderCards/RenderCards.js";
import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";
import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import getCardDetails from "shared/getCardDetails";
import { SENTINEL } from "shared/constants.js";

class CardsToRender extends Component {
   componentDidUpdate() {
      const cardsToRender = this.updateResults();
      if (Object.keys(cardsToRender).length < 1) this.props.newResults([]);
   }

   updateResults = () => {
      const { searchResults, maindeck, sidedeck } = this.props;
      const cardsToRender = [];

      for (const name of searchResults) {
         const cardName = name.split(SENTINEL)[0];
         const quantity = (getCardDetails(cardName).limit || 3) - (deduped(maindeck)[cardName] || 0) - (deduped(sidedeck)[cardName] || 0);
         if (quantity > 0) cardsToRender.push({ name, quantity });
      }

      return cardsToRender;
   };

   render() {
      const { player, maxHeight } = this.props;

      const cardHeight = this.context / 6.05; // this is a magic number to make 2 cards per row take up whole container
      const cardsToRender = this.updateResults();

      return <RenderCards cardsToRender={cardsToRender} maxHeight={maxHeight} cardHeight={cardHeight} player={player} decklist />;
   }
}

function deduped(deck) {
   const names = {};
   for (const raw in deck) {
      const name = raw.split(SENTINEL)[0];
      names[name] = (names[name] ? names[name] + deck[raw] : deck[raw]);
   }
   return names;
}

function mapStateToProps(state) {
   return { searchResults: state.searchResults, maindeck: state.decklist.maindeck, sidedeck: state.decklist.sidedeck };
}

CardsToRender.propTypes = {
   player: PropTypes.string.isRequired,
   maxHeight: PropTypes.number.isRequired
};

CardsToRender.contextType = SizeContext;

export default connect(mapStateToProps, { newResults })(CardsToRender);
