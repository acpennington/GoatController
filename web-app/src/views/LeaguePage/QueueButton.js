import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import Shadow from "components/Shadow/Shadow.js";
import Button from "components/CustomButtons/Button.js";

import { getAuthHeaders } from "utils/authToken.js";
import getApiStage from "utils/getApiStage.js";
import { LEAGUE_SOCKET_URL, ENTER_QUEUE, NEW_GAME } from "utils/constants.js";

class QueueButton extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { webSocket: false };
   }

   joinQueue = () => {
      const webSocket = new WebSocket(LEAGUE_SOCKET_URL + getApiStage());

      webSocket.onopen = () => {
         const token = getAuthHeaders(false);
         const payload = { action: ENTER_QUEUE, data: { token, id: this.props.leagueId } };
         webSocket.send(JSON.stringify(payload));

         this.setState({ webSocket });
      };

      webSocket.onmessage = (event) => {
         const message = event.data;
         if (message.action = NEW_GAME) window.location.href = "/game?id="+message.data;
      };

      webSocket.onclose = () => {
         this.setState({ webSocket: false });
      };
   };

   leaveQueue = () => {
      this.state.webSocket.close();
   };

   render() {
      const { webSocket } = this.state;

      return (
         <Fragment>
            <Button color={webSocket ? "danger" : "success"} size="lg" round onClick={webSocket ? this.leaveQueue : this.joinQueue}>
               Click to {webSocket ? "Leave" : "Enter"} the Matchmaking Queue
            </Button>
            {webSocket && <Shadow>Finding you a match...</Shadow>}
         </Fragment>
      );
   }
}

QueueButton.propTypes = {
   leagueId: PropTypes.string.isRequired
};

export default QueueButton;
