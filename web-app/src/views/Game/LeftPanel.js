import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";
import Chat from "components/Chat/Chat.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class LeftPanel extends Component {
   render() {
      const { classes, hoverCard, selectedCard } = this.props;
      const name = window.sessionStorage.getItem("username");

      return (
         <div className={classes.leftPanel}>
            <YugiohCardExpanded hoverCard={hoverCard} selectedCard={selectedCard} />
            <Chat name={name} />
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { hoverCard: state.hoverCard, selectedCard: state.selectedCard };
}

LeftPanel.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(withStyles(styles)(LeftPanel));
