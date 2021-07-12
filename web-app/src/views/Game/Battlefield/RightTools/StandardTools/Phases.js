import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";

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
      const { nextPhase, turn } = this.props;
      const { phase } = turn;
      const isHeroTurn = this.isHeroTurn();

      if (isHeroTurn && phase !== NEXT_TURN) nextPhase(this.context);
      else if (!isHeroTurn && phase === NEXT_TURN) this.trySetTurn(DRAW);
   };

   tryPrevPhase = () => {
      const { prevPhase, turn } = this.props;

      if (this.isHeroTurn() && turn.phase !== DRAW) prevPhase(this.context);
   };

   trySetTurn = (aPhase) => {
      const { setTurn, turn, heroPlayer } = this.props;
      const { player, phase } = turn;

      if (this.isHeroTurn()) {
         if (phase !== aPhase) setTurn(player, aPhase, this.context);
      } else if (phase === NEXT_TURN) setTurn(heroPlayer, DRAW, this.context);
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
