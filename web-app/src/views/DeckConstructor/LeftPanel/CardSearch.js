import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import CardFinder from "components/CardFinder/CardFinder.js";
import GenericFinder from "components/CardFinder/GenericFinder.js";
import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";
import { allCardTypes } from "utils/constants.js";
import display from "utils/display.js";

import { FaSearch } from "react-icons/fa";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class CardSearch extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { params: {} };
   }

   setCardType = (value) => {
      this.setState({ params: { ...this.state.params, cardType: value } });
   };

   getResults = (value) => this.props.newResults([value]);

   render() {
      const { classes } = this.props;
      const { params } = this.state;

      return (
         <Fragment>
            <div className={classes.byName}>
               <div className={classes.quickFind}>Quick Find:</div>
               <CardFinder withFusions={false} onChange={this.getResults} />
            </div>
            <div className={classes.byName}>
               <div className={classes.quickFind}>Card Type:</div>
               <GenericFinder
                  options={allCardTypes.map((type) => {
                     return { value: type, name: display(type) };
                  })}
                  onChange={this.setCardType}
               />
            </div>
            {Object.keys(params).length > 0 && (
               <div className={classes.centerFlex}>
                  <Button size="lg" color="primary" round>
                     <FaSearch /> Search
                  </Button>
               </div>
            )}
         </Fragment>
      );
   }
}

CardSearch.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(null, { newResults })(withStyles(styles)(CardSearch));
