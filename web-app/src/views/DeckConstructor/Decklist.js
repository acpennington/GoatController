import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";

class Decklist extends Component {
   render() {
      const { classes, width } = this.props;

      return <div className={classes.container} style={{ width, flex: width }}></div>;
   }
}

Decklist.propTypes = {
   classes: PropTypes.object.isRequired,
   width: PropTypes.string.isRequired
};

export default withStyles(styles)(Decklist);
