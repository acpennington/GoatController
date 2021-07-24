import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/searchResults.js";

class SearchResults extends Component {
   render() {
      const { classes } = this.props;

      return <div className={classes.container}></div>;
   }
}

SearchResults.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchResults);
