import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import { GRAVEYARD, BANISHED, DECK } from "shared/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

class ShortcutFooter extends PureComponent {
   render() {
      const { row } = this.props;
      return <Fragment>Shortcut: {getShortcut(row)}</Fragment>;
   }
}

function getShortcut(row) {
   switch (row) {
      case GRAVEYARD:
         return "Double-click a card to banish it.";
      case BANISHED:
         return "Double-click a card to move it back to your Graveyard.";
      case DECK:
         return "Double-click a card to add it to your hand.";
      default:
         return "None";
   }
}

ShortcutFooter.propTypes = {
   row: PropTypes.string.isRequired
};

export default withStyles(styles)(ShortcutFooter);
