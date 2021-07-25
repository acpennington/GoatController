import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CardFinder from "components/CardFinder/CardFinder.js";
import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class CardSearch extends PureComponent {
   getResults = (value) => this.props.newResults([value]);

   render() {
      const { classes } = this.props;

      return (
         <div className={classes.byName}>
            <div className={classes.quickFind}>Quick Find:</div>
            <CardFinder withFusions={false} onChange={this.getResults} />
         </div>
      );
   }
}

CardSearch.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(null, { newResults })(withStyles(styles)(CardSearch));
