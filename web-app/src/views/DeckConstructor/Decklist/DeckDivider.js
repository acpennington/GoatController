import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";

class DeckDivider extends PureComponent {
   render() {
      const { classes, deckLoaded, mainCount, sideCount } = this.props;

      return (
         <h4 className={classes.deckLabel}>
            {deckLoaded} — Main Deck: {mainCount}, Sidedeck: {sideCount}
         </h4>
      );
   }
}

function mapStateToProps(state) {
   return { deckLoaded: state.settings.deckLoaded };
}

DeckDivider.propTypes = {
   classes: PropTypes.object.isRequired,
   mainCount: PropTypes.number.isRequired,
   sideCount: PropTypes.number.isRequired,
   deckLoaded: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(DeckDivider));
