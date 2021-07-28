import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Tooltip from "@material-ui/core/Tooltip";
import { closeModal } from "stateStore/actions/shared/settings.js";
import { WebSocketContext } from "views/Game/WebSocketContext";
import { shuffleDeck } from "stateStore/actions/game/field";

import { DECK } from "utils/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

class ModalHeader extends PureComponent {
   componentDidMount() {
      bind("esc", () => this.props.closeModal(this.props.row, this.props.player, this.context));
   }

   componentWillUnmount() {
      unbind(["esc"]);
   }

   componentDidUpdate(prevProps) {
      if (prevProps.row === DECK && this.props.row !== DECK) this.props.shuffleDeck(this.props.player, this.context);
   }

   render() {
      const { classes, addName, player, row, closeModal } = this.props;

      return (
         <Tooltip id="close" title="Click to close" placement="bottom" classes={{ tooltip: classes.tooltip }}>
            <div id="modalheader" className={classes["header" + row.split(" ")[0]]} onClick={() => closeModal(row, player, this.context)}>
               Viewing {addName && player + "'s"} {row}
            </div>
         </Tooltip>
      );
   }
}

ModalHeader.propTypes = {
   addName: PropTypes.bool.isRequired,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired
};

ModalHeader.contextType = WebSocketContext;

export default connect(null, { closeModal, shuffleDeck })(withStyles(styles)(ModalHeader));
