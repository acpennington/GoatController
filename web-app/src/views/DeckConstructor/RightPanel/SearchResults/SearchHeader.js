import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Tooltip from "@material-ui/core/Tooltip";

import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/rightPanel.js";

class SearchHeader extends Component {
   componentDidMount() {
      bind("esc", this.closeSearch);
   }

   componentWillUnmount() {
      unbind(["esc"]);
   }

   shouldComponentUpdate() {
      return false;
   }

   closeSearch = () => this.props.newResults([]);

   render() {
      const { classes } = this.props;

      return (
         <Tooltip id="close" title="Click to close" placement="bottom" classes={{ tooltip: classes.tooltip }}>
            <div id="searchHeader" className={classes.header} onClick={this.closeSearch}>
               Search Results
            </div>
         </Tooltip>
      );
   }
}

SearchHeader.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(null, { newResults })(withStyles(styles)(SearchHeader));
