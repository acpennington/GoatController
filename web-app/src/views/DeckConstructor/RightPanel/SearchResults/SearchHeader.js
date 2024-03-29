import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Tooltip from "components/Tooltip/PatchedTooltip.js";

import CloseX from "components/CloseX/CloseX.js";
import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";

import { withStyles } from "@mui/styles";
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
            <div className={classes.headerContainer} onClick={this.closeSearch}>
               <CloseX />
               <div id="searchHeader" className={classes.header}>
                  Search Results
               </div>
            </div>
         </Tooltip>
      );
   }
}

SearchHeader.propTypes = {
   classes: PropTypes.object.isRequired,
   newResults: PropTypes.func.isRequired
};

export default connect(null, { newResults })(withStyles(styles)(SearchHeader));
