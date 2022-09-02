import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DeckSettings from "./DeckSettings/DeckSettings.js";
import SearchResults from "./SearchResults/SearchResults.js";

class RightPanel extends Component {
   render() {
      const { thereAreResults, player } = this.props;

      return <Fragment>{thereAreResults ? <SearchResults player={player} /> : <DeckSettings player={player} />}</Fragment>;
   }
}

function mapStateToProps(state) {
   return { thereAreResults: state.searchResults.length > 0 };
}

RightPanel.propTypes = {
   player: PropTypes.string.isRequired,
   thereAreResults: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(RightPanel);
