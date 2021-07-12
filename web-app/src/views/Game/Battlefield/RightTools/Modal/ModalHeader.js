import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Tooltip from "@material-ui/core/Tooltip";
import { closeModal } from "stateStore/actions/settings.js";
import { WebSocketContext } from "views/Game/WebSocketContext";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

class ModalHeader extends PureComponent {
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

export default connect(null, { closeModal })(withStyles(styles)(ModalHeader));
