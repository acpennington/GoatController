import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";
import CardSearch from "./CardSearch.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class LeftPanel extends PureComponent {
   render() {
      const { classes, hoverCard, selectedCard } = this.props;

      return (
         <div className={classes.leftPanel}>
            <YugiohCardExpanded hoverCard={hoverCard} selectedCard={selectedCard} />
            <div className={classes.bottomContainer}>
               <FriendlyScroll id="leftPanel" flexDirection="column" contStyle={{ height: "100%" }} style={{ height: "100%" }}>
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
   classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(LeftPanel));
