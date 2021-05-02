import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Tooltip from "@material-ui/core/Tooltip";
import getPlayerName from "utils/getPlayerName.js";
import { closeModal } from "stateStore/actions/settings.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

class ModalHeader extends PureComponent {
   render() {
      const { classes, addName, player, row } = this.props;
      return (
         <Tooltip id="close" title="Click to close" placement="bottom" classes={{ tooltip: classes.tooltip }}>
            <div
               id="modalheader"
               className={classes["header" + row.split(" ")[0]]}
               onClick={() => this.props.closeModal(row)}
            >
               Viewing {addName && getPlayerName(player) + "'s"} {row}
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

export default connect(null, { closeModal })(withStyles(styles)(ModalHeader));
