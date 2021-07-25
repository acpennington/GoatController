import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import CardFinder from "components/CardFinder/CardFinder.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class CardSearch extends PureComponent {
   render() {
      const { classes } = this.props;

      return (
         <div>
            Search By Name:
            <CardFinder withFusions={false} />
         </div>
      );
   }
}

CardSearch.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardSearch);
