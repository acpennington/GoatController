import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext";
import { PLAYER_CONCEDED, CLEANUP_GAME } from "utils/constants.js";

class ConcedeButton extends PureComponent {
   render() {
      const { concessionLink } = this.props;
      const color = concessionLink ? "primary" : "rose";
      const func = concessionLink ? () => quitGame(this.context) : () => concedeGame(this.context);

      return (
         <Button color={color} round href={concessionLink ? concessionLink : undefined} onClick={func} style={{ marginBottom: "15px" }}>
            {concessionLink ? "Quit" : "Concede Duel"}
         </Button>
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

ConcedeButton.contextType = WebSocketContext;

export default connect(mapStateToProps)(ConcedeButton);
