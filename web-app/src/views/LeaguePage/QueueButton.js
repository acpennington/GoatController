import React, { PureComponent, Fragment } from "react";

import Shadow from "components/Shadow/Shadow.js";
import Button from "components/CustomButtons/Button.js";

import getApiStage from "utils/getApiStage.js";
import { LEAGUE_SOCKET_URL } from "utils/constants.js";

class QueueButton extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { webSocket: false };
   }

   joinQueue = () => {
      const webSocket = new WebSocket(LEAGUE_SOCKET_URL + getApiStage());

      webSocket.onopen = (event) => {
         this.setState({ webSocket });
         console.log(webSocket);
         console.log("Connection successful");
      };

      webSocket.onclose = (event) => {
         console.log("connection closed");
      };
   };

   render() {
      const { webSocket } = this.state;

      return (
         <Fragment>
            <Button color={webSocket ? "danger" : "success"} size="lg" round onClick={webSocket ? undefined : this.joinQueue}>
               Click to {webSocket ? "Leave" : "Enter"} the Matchmaking Queue
            </Button>
            {webSocket && <Shadow>Finding you a match...</Shadow>}
         </Fragment>
      );
   }
}

export default QueueButton;
