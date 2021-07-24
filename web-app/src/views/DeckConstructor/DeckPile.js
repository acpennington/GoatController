import React, { Component } from "react";
import PropTypes from "prop-types";

class DeckPile extends Component {
   render() {
      return null;
   }
}

DeckPile.propTypes = {
   name: PropTypes.string.isRequired,
   cards: PropTypes.array.isRequired
};

export default DeckPile;
