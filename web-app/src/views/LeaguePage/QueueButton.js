import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import Shadow from "components/Shadow/Shadow.js";
import DialogButton from "components/CustomButtons/DialogButton.js";
import Button from "components/CustomButtons/Button.js";
import verifyDecks from "shared/verifyDecks.js";

import { getAuthHeaders } from "utils/authToken.js";
import getApiStage from "utils/getApiStage.js";
import { LEAGUE_SOCKET_URL, ENTER_QUEUE, NEW_GAME } from "shared/constants.js";

class QueueButton extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { webSocket: false };

      const storage = window.sessionStorage;
      const activeDeck = storage.getItem("activeDeck");
      const decks = JSON.parse(storage.getItem("decks"));
      this.errors = verifyDecks(decks[activeDeck].maindeck, decks[activeDeck].sidedeck, props.allowExarion);
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
         const message = JSON.parse(event.data);
         if (message.action === NEW_GAME) {
            const { data } = message;
            window.sessionStorage.setItem("activeMatch", data);
            window.location.href = "/game?id=" + data;
         }
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

      const errors = this.errors.map((error, index) => <li key={index}>{error}</li>);

      return (
         <Fragment>
            {!this.errors.length ? (
               <Button color={webSocket ? "danger" : "success"} size="lg" round onClick={webSocket ? this.leaveQueue : this.joinQueue}>
                  Click to {webSocket ? "Leave" : "Enter"} the Matchmaking Queue
               </Button>
            ) : (
               <DialogButton
                  button={"Illegal Deck"}
                  buttonProps={{ color: "warning", round: true, size: "lg" }}
                  dialogTitle={"Errors"}
                  dialogContent={<ul>{errors}</ul>}
                  affirmative={"OK"}
                  affirmativeProps={{ color: "primary" }}
               />
            )}
            {webSocket && <Shadow>Finding you a match...</Shadow>}
         </Fragment>
      );
   }
}

QueueButton.propTypes = {
   leagueId: PropTypes.string.isRequired,
   allowExarion: PropTypes.bool.isRequired
};

export default QueueButton;
