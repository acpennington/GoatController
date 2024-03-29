import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ResizableContainer, { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner.js";
import LeftPanel from "./LeftPanel.js";
import Battlefield from "./Battlefield/Battlefield.js";
import { WebSocketContext } from "./WebSocketContext.js";
import { resetSolo, adjustLP, createTokens, moveCard } from "stateStore/actions/game/field.js";

import { getAuthHeaders } from "utils/authToken.js";
import getApiStage from "utils/getApiStage.js";
import getQueryParams from "utils/getQueryParams.js";
import {
   VILLAIN_HAND_HEIGHT_FRACTION,
   GAME_SOCKET_URL,
   JOIN_MATCH,
   CONNECTED,
   MULTIPLE_ACTIONS,
   REDIRECT,
   ADJUST_LP,
   CREATE_TOKEN,
   MOVE_CARD,
   DIVIDER_HEIGHT
} from "shared/constants.js";

class Game extends Component {
   constructor(props) {
      super(props);

      this.socket = { api: false, matchId: getQueryParams().id, token: getAuthHeaders(false) };
      this.player = { name: window.sessionStorage.getItem("username"), solo: !this.socket.matchId };

      this.state = {
         loading: !this.player.solo,
         lostConnection: false
      };

      if (this.player.solo) props.dispatch(resetSolo(this.player.name));
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
            const payloads = message.data;
            switch (message.action) {
               case CONNECTED:
                  payloads.forEach((payload) => this.props.dispatch({ type: payload.action, data: payload.data }));
                  this.setState({ loading: false, lostConnection: false });
                  break;
               case MULTIPLE_ACTIONS:
                  payloads.forEach((payload) => this.customDispatch(payload.action, payload.data));
                  break;
               case REDIRECT:
                  window.sessionStorage.removeItem("activeMatch");
                  window.location.href = payloads;
                  break;
               default:
                  this.props.dispatch({ type: message.action, data: payloads });
            }
         } else console.log(message);
      };

      webSocket.onclose = () => {
         this.setState({ lostConnection: true });
         this.setWebSocket();
      };

      this.socket.api = webSocket;
   };

   customDispatch = (action, data) => {
      const { dispatch } = this.props;

      if (action)
         switch (action) {
            case ADJUST_LP: {
               const { player, change, currentLP } = data;
               dispatch(adjustLP(player, change, currentLP));
               break;
            }
            case CREATE_TOKEN: {
               const { player, params } = data;
               dispatch(createTokens(player, params));
               break;
            }
            case MOVE_CARD:
               dispatch(moveCard(data));
               break;
            default:
               dispatch({ type: action, data });
         }
   };

   render() {
      const { numPlayers } = this.props;
      const { loading, lostConnection } = this.state;
      const { player, socket } = this;

      if (lostConnection) return <LoadingSpinner message="Lost connection. Attempting to reconnect..." />;
      if (loading || (!player.solo && numPlayers !== 2)) return <LoadingSpinner message="Connecting to Match..." />;
      else
         return (
            <WebSocketContext.Provider value={socket}>
               <ResizableContainer isGame>
                  <LeftPanel name={player.name} />
                  <SizeContext.Consumer>
                     {(value) => (
                        <Battlefield
                           columnHeight={value / (5 + VILLAIN_HAND_HEIGHT_FRACTION)}
                           rowHeight={(value - DIVIDER_HEIGHT) / (5 + VILLAIN_HAND_HEIGHT_FRACTION)}
                           player={player}
                        />
                     )}
                  </SizeContext.Consumer>
               </ResizableContainer>
            </WebSocketContext.Provider>
         );
   }
}

function mapStateToProps(state) {
   return { numPlayers: Object.keys(state.field).length };
}

Game.propTypes = {
   dispatch: PropTypes.func.isRequired,
   numPlayers: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Game);
