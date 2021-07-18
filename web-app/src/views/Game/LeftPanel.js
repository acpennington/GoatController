import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";
import Chat from "components/Chat/Chat.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class LeftPanel extends Component {
   render() {
      const { classes, hoverCard, selectedCard, name } = this.props;

      return (
         <div className={classes.leftPanel}>
            <YugiohCardExpanded hoverCard={hoverCard} selectedCard={selectedCard} heroPlayer={name} />
            <Chat name={name} />
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

export default connect(mapStateToProps, {})(withStyles(styles)(LeftPanel));
