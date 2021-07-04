import React, { Component, createContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner.js";

import LeftPanel from "./LeftPanel.js";
import Battlefield from "./Battlefield/Battlefield.js";

import getApiStage from "utils/getApiStage.js";
import getQueryParams from "utils/getQueryParams.js";
import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";
import { GAME_RATIO, VILLAIN_HAND_SIZE, GAME_SOCKET_URL } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

export const WebSocketContext = createContext(null);

class Game extends Component {
   constructor(props) {
      super(props);
      checkToken(true);
      setBodyImage();

      const leagueId = getQueryParams().id;
      this.solo = !leagueId;

      this.state = {
         sizingValue: getSizingValue(),
         loading: !!leagueId,
         lostConnection: false
      };

      window.addEventListener("resize", () => {
         this.setState({ sizingValue: getSizingValue() });
      });
   }

   componentDidMount() {
      if (!this.solo) {
         const webSocket = new WebSocket(GAME_SOCKET_URL + getApiStage());

         webSocket.onopen = () => {
            // send message to the server with gameid
            this.setState({ loading: false });
         };

         webSocket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            this.props.dispatch({ type: message.action, data: message.data });
         };

         webSocket.onclose = () => {
            this.setState({ lostConnection: true });
         };

         this.webSocket = webSocket;
      }
   }

   render() {
      const { classes } = this.props;
      const { sizingValue, loading, lostConnection } = this.state;
      const { solo, webSocket } = this;

      if (lostConnection) return <LoadingSpinner message="Lost connection. Refresh the page to reconnect." />;
      if (loading) return <LoadingSpinner message="Connecting to game..." />;
      else
         return (
            <WebSocketContext.Provider value={webSocket}>
               <div className={classes.container}>
                  <div
                     className={classes.innerContainer}
                     style={{
                        height: sizingValue,
                        width: sizingValue * GAME_RATIO
                     }}
                  >
                     <LeftPanel />
                     <Battlefield size={sizingValue / (5 + VILLAIN_HAND_SIZE)} solo={solo} />
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

export default connect(null, null)(withStyles(styles)(Game));
