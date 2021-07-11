import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";

import { setTurn, nextPhase, prevPhase } from "stateStore/actions/turn.js";
import { phases, DRAW, NEXT_TURN, NEW_PHASE, PUSH_NEXT_PHASE } from "utils/constants.js";

class Phases extends PureComponent {
   componentDidMount() {
      bind("up", this.tryPrevPhase);
      bind("down", this.tryNextPhase);
   }

   componentWillUnmount() {
      unbind(["up", "down"]);
   }

   tryNextPhase = () => {
      const { nextPhase, turn } = this.props;
      const { phase } = turn;
      const isHeroTurn = this.isHeroTurn();

      if (isHeroTurn && phase !== NEXT_TURN) {
         nextPhase();
         const socket = this.context;
         if (socket && socket.api) {
            const payload = { action: PUSH_NEXT_PHASE, data: { token: socket.token, id: socket.matchId } };
            socket.api.send(JSON.stringify(payload));
         }
      } else if (!isHeroTurn && phase === NEXT_TURN) this.trySetTurn(DRAW);
   };

   tryPrevPhase = () => {
      const { prevPhase, turn } = this.props;

      if (this.isHeroTurn() && turn.phase !== DRAW) {
         prevPhase();
         // make websocket api call
      }
   };

   trySetTurn = (aPhase) => {
      const { setTurn, turn, heroPlayer } = this.props;
      const { player, phase } = turn;

      if (this.isHeroTurn()) {
         if (phase !== aPhase) {
            setTurn(player, aPhase);
            const socket = this.context;
            if (socket && socket.api) {
               const payload = { action: NEW_PHASE, data: { token: socket.token, id: socket.matchId, data: { player, phase: aPhase } } };
               socket.api.send(JSON.stringify(payload));
            }
         }
      } else if (phase === NEXT_TURN) {
         setTurn(heroPlayer, DRAW);
         const socket = this.context;
         if (socket && socket.api) {
            const payload = { action: NEW_PHASE, data: { token: socket.token, id: socket.matchId, data: { player: heroPlayer, phase: DRAW } } };
            socket.api.send(JSON.stringify(payload));
         }
      }
   };

   isHeroTurn = () => this.props.turn.player === this.props.heroPlayer;

   render() {
      const { turn } = this.props;
      const { phase } = turn;

      const isHeroTurn = this.isHeroTurn();
      const myColor = isHeroTurn ? "info" : "danger";

      return (
         <Fragment>
            {phases.map((aPhase, index) => (
               <Button
                  color={myColor}
                  round
                  style={{ opacity: aPhase === phase || 0.8, border: aPhase === phase && "solid 3px white" }}
                  key={index}
                  onClick={() => this.trySetTurn(aPhase)}
               >
                  {aPhase}
               </Button>
            ))}
         </Fragment>
      );
   }
}

function mapStateToProps(state) {
   return { turn: state.turn };
}

Phases.propTypes = {
   heroPlayer: PropTypes.string.isRequired
};

Phases.contextType = WebSocketContext;

export default connect(mapStateToProps, { setTurn, nextPhase, prevPhase })(Phases);
