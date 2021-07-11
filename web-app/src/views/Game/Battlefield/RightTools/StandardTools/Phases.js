import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";

import { setTurn, nextPhase, prevPhase } from "stateStore/actions/turn.js";
import { phases, DRAW, NEXT_TURN } from "utils/constants.js";

class Phases extends PureComponent {
   componentDidMount() {
      bind("up", this.tryPrevPhase);
      bind("down", this.tryNextPhase);
   }

   componentWillUnmount() {
      unbind(["up", "down"]);
   }

   tryNextPhase = () => {
      const { nextPhase, turn, heroPlayer } = this.props;
      const { phase } = turn;
      const isHeroTurn = this.isHeroTurn();

      if (isHeroTurn && phase !== NEXT_TURN) {
         nextPhase();
         // make websocket api call
      } else if (!isHeroTurn && phase === NEXT_TURN) {
         setTurn(heroPlayer, DRAW);
         // make websocket api call
      }
   };

   tryPrevPhase = () => {
      const { prevPhase, turn } = this.props;

      if (this.isHeroTurn() && turn.phase !== DRAW) {
         prevPhase();
         // make websocket api call
      }
   };

   trySetTurn = (aPhase) => {
      const { setTurn, turn } = this.props;
      const { player, phase } = turn;

      if (this.isHeroTurn()) {
         setTurn(player, aPhase);
         // make websocket api call
      } else if (phase === NEXT_TURN) {
         setTurn(player, DRAW);
         // make websocket api call
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

export default connect(mapStateToProps, { setTurn, nextPhase, prevPhase })(Phases);
