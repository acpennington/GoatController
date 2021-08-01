import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";
import DeckSelector from "./DeckSelector.js";
import CardSearch from "./CardSearch.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class LeftPanel extends PureComponent {
   render() {
      const { classes, name, hoverCard, selectedCard } = this.props;

      return (
         <div className={classes.leftPanel}>
            <YugiohCardExpanded hoverCard={hoverCard} selectedCard={selectedCard} heroPlayer={name} noButtons />

            <div className={classes.bottomContainer}>
               <FriendlyScroll id="leftPanel" flexDirection="column">
                  <DeckSelector activeDeck={null} deckNames={null} />
                  <CardSearch />
               </FriendlyScroll>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state, ownProps) {
   return { hoverCard: state.hoverCard, selectedCard: state.selectedCard[ownProps.name] };
}

LeftPanel.propTypes = {
   classes: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(LeftPanel));
