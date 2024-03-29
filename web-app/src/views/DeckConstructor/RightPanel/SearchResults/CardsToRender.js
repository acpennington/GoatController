import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RenderCards from "components/RenderCards/RenderCards.js";
import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";
import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import getCardDetails from "shared/getCardDetails";
import { SEARCH_RESULTS } from "shared/constants.js";
import { removeArt } from "utils/splitArt.js";

class CardsToRender extends Component {
   componentDidUpdate() {
      const cardsToRender = this.updateResults();
      if (Object.keys(cardsToRender).length < 1) this.props.newResults([]);
   }

   updateResults = () => {
      const { searchResults, maindeck, sidedeck } = this.props;
      const cardsToRender = [];

      const main = deduped(maindeck);
      const side = deduped(sidedeck);

      for (const name of searchResults) {
         const originalName = removeArt(name);
         const card = getCardDetails(originalName);
         const effectiveName = card.treatedAs || originalName;
         const quantity = (card.limit || 3) - (main[effectiveName] || 0) - (side[effectiveName] || 0);
         if (quantity > 0) cardsToRender.push({ name, quantity });
      }

      return cardsToRender;
   };

   render() {
      const { player, maxHeight } = this.props;

      const cardHeight = this.context / 6.05; // this is a magic number to make 2 cards per row take up whole container
      const cardsToRender = this.updateResults();

      return <RenderCards cardsToRender={cardsToRender} maxHeight={maxHeight} cardHeight={cardHeight} player={player} decklist={SEARCH_RESULTS} />;
   }
}

function deduped(deck) {
   const names = {};
   for (const raw in deck) {
      let name = removeArt(raw);
      const card = getCardDetails(name);
      name = card.treatedAs || name;
      names[name] = names[name] ? names[name] + deck[raw] : deck[raw];
   }
   return names;
}

function mapStateToProps(state) {
   return { searchResults: state.searchResults, maindeck: state.decklist.maindeck, sidedeck: state.decklist.sidedeck };
}

CardsToRender.propTypes = {
   player: PropTypes.string.isRequired,
   maxHeight: PropTypes.number.isRequired,
   newResults: PropTypes.func.isRequired,
   searchResults: PropTypes.array.isRequired,
   maindeck: PropTypes.object.isRequired,
   sidedeck: PropTypes.object.isRequired
};

CardsToRender.contextType = SizeContext;

export default connect(mapStateToProps, { newResults })(CardsToRender);
