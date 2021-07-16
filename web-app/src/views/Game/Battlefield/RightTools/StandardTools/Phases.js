import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";

import { setTurn, nextPhase, prevPhase } from "stateStore/actions/turn.js";
import { phases, DRAW, NEXT_TURN } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

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

   trySetTurn = (buttonPhase) => {
      const { setTurn, turn, heroPlayer } = this.props;
      const { player, phase } = turn;

      if (this.isHeroTurn()) {
         if (phase !== buttonPhase) setTurn(player, buttonPhase, this.context);
      } else if (phase === NEXT_TURN) setTurn(heroPlayer, DRAW, this.context, player);
   };

   isHeroTurn = () => this.props.turn.player === this.props.heroPlayer;

   getClassName = (buttonPhase) => {
      const currentPhase = this.props.turn.phase;
      if (buttonPhase === currentPhase) {
         if (currentPhase === NEXT_TURN) return "nextTurnFlashing";
         else return "activePhase";
      }
      return "inactivePhase";
   }

   render() {
      const { classes } = this.props;
      const isHeroTurn = this.isHeroTurn();
      const myColor = isHeroTurn ? "info" : "danger";

      return (
         <Fragment>
            {phases.map((buttonPhase, index) => (
               <Button
                  color={myColor}
                  round
                  className={classes[this.getClassName(buttonPhase)]}
                  //style={{ opacity: buttonPhase === phase || 0.8, border: buttonPhase === phase && "solid 3px white" }}
                  key={index}
                  onClick={() => this.trySetTurn(buttonPhase)}
               >
                  {buttonPhase}
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
   heroPlayer: PropTypes.string.isRequired,
   classes: PropTypes.object.isRequired
};

Phases.contextType = WebSocketContext;

export default connect(mapStateToProps, { setTurn, nextPhase, prevPhase })(withStyles(styles)(Phases));
