import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner.js";
import LeftPanel from "./LeftPanel.js";
import Battlefield from "./Battlefield/Battlefield.js";
import { WebSocketContext } from "./WebSocketContext.js";

import { getAuthHeaders } from "utils/authToken.js";
import getApiStage from "utils/getApiStage.js";
import getQueryParams from "utils/getQueryParams.js";
import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";
import { GAME_RATIO, VILLAIN_HAND_SIZE, GAME_SOCKET_URL, JOIN_MATCH, CONNECTED } from "utils/constants.js";
import { resetSolo } from "stateStore/actions/field.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class Game extends Component {
   constructor(props) {
      super(props);
      checkToken(true);
      setBodyImage();

      this.socket = { api: false, matchId: getQueryParams().id, token: getAuthHeaders(false) };
      this.player = { name: window.sessionStorage.getItem("username"), solo: !this.socket.matchId };

      this.state = {
         sizingValue: getSizingValue(),
         loading: !this.player.solo,
         lostConnection: false
      };

      window.addEventListener("resize", () => {
         this.setState({ sizingValue: getSizingValue() });
      });

      if (this.player.solo) props.resetSolo(this.player.name);
   }

   componentDidMount() {
      if (!this.player.solo) {
         this.setWebSocket();
      }
   }

   setWebSocket = () => {
      const { token, matchId } = this.socket;
      const webSocket = new WebSocket(GAME_SOCKET_URL + getApiStage());

      webSocket.onopen = () => {
         const payload = { action: JOIN_MATCH, data: { token, id: matchId } };
         webSocket.send(JSON.stringify(payload));
      };

      webSocket.onmessage = (event) => {
         const message = JSON.parse(event.data);
         if (message.action) {
            switch (message.action) {
               case CONNECTED:
                  const payloads = message.data;
                  payloads.forEach((payload) => this.props.dispatch({ type: payload.action, data: payload.data }));
                  this.setState({ loading: false, lostConnection: false });
                  break;
               default:
                  this.props.dispatch({ type: message.action, data: message.data });
            }
         } else console.log(message);
      };

      webSocket.onclose = () => {
         this.setState({ lostConnection: true });
         this.setWebSocket();
      };

      this.socket.api = webSocket;
   };

   render() {
      const { classes } = this.props;
      const { sizingValue, loading, lostConnection } = this.state;
      const { player, socket } = this;

      if (lostConnection) return <LoadingSpinner message="Lost connection. Attempting to reconnect..." />;
      if (loading) return <LoadingSpinner message="Connecting to game..." />;
      else
         return (
            <WebSocketContext.Provider value={socket}>
               <div className={classes.container}>
                  <div
                     className={classes.innerContainer}
                     style={{
                        height: sizingValue,
                        width: sizingValue * GAME_RATIO
                     }}
                  >
                     <LeftPanel name={player.name} />
                     <Battlefield size={sizingValue / (5 + VILLAIN_HAND_SIZE)} player={player} />
                  </div>
               </div>
            </WebSocketContext.Provider>
         );
   }
}

function getSizingValue() {
   const vpw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
   const vph = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
   return Math.min(vpw / GAME_RATIO, vph);
}

Game.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(null, { resetSolo })(withStyles(styles)(Game));
