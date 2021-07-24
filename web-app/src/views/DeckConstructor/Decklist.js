import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";

class Decklist extends Component {
   render() {
      return null;
   }
}

Decklist.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Decklist);
