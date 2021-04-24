import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";

import { setTurn, nextPhase, prevPhase } from "stateStore/actions/turn.js";
import { HERO, phases, NEXT_TURN } from "utils/constants.js";

class Phases extends PureComponent {
   componentDidMount() {
      bind("up", this.props.prevPhase);
      bind("down", this.props.nextPhase);
   }

   componentWillUnmount() {
      unbind(["up", "down"]);
   }

   render() {
      const { turn, setTurn, nextPhase } = this.props;
      const { player, phase } = turn;

      const isHeroTurn = player === HERO;
      const myColor = isHeroTurn ? "info" : "danger";

      return (
         <Fragment>
            {phases.map((aPhase, index) => (
               <Button
                  color={myColor}
                  round
                  style={{ opacity: aPhase === phase || 0.8, border: aPhase === phase && "solid 3px white" }}
                  key={index}
                  onClick={() => {
                     if (isHeroTurn) setTurn(player, aPhase);
                     else if (phase === NEXT_TURN) nextPhase();
                  }}
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

export default connect(mapStateToProps, { setTurn, nextPhase, prevPhase })(Phases);
