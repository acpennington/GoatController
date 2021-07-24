import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class LeftPanel extends PureComponent {
   render() {
      const { classes, name, hoverCard, selectedCard } = this.props;

      return (
         <div className={classes.leftPanel}>
            <YugiohCardExpanded hoverCard={hoverCard} selectedCard={selectedCard} heroPlayer={name} />
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
