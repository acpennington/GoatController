import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button";
import DialogButton from "components/CustomButtons/DialogButton";
import DialogContentText from "@mui/material/DialogContentText";
import { WebSocketContext } from "views/Game/WebSocketContext";
import { PLAYER_CONCEDED, CLEANUP_GAME } from "shared/constants.js";

class ConcedeButton extends PureComponent {
   render() {
      const { concessionLink } = this.props;
      const color = concessionLink ? "primary" : "rose";

      return concessionLink ? (
         <Button color={color} round href={concessionLink} onClick={() => quitGame(this.context)} style={{ marginBottom: "15px" }}>
            Quit
         </Button>
      ) : (
         <DialogButton
            button={"Concede Duel"}
            buttonProps={{ color, round: true, style: { marginBottom: "15px" } }}
            onConfirm={() => concedeGame(this.context)}
            dialogTitle={"Concede Duel"}
            dialogContent={<DialogContentText>Are you sure you wish to concede?</DialogContentText>}
            affirmative={"Yes"}
            affirmativeProps={{ color: "primary" }}
            negative={"No"}
            negativeProps={{ color: "primary" }}
         />
      );
   }
}

function concedeGame(socket) {
   if (socket && socket.api) {
      const payload = { action: PLAYER_CONCEDED, data: { token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }
}

function quitGame(socket) {
   window.sessionStorage.removeItem("activeMatch");

   if (socket && socket.api) {
      const payload = { action: CLEANUP_GAME, data: { token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }
}

function mapStateToProps(state) {
   return { concessionLink: state.settings.concessionLink };
}

ConcedeButton.propTypes = {
   concessionLink: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

ConcedeButton.contextType = WebSocketContext;

export default connect(mapStateToProps)(ConcedeButton);
