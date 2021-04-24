import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import ButtonRow from "components/CustomButtons/ButtonRow.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Switches from "./Switches.js";
import ShowingDiscard from "./ShowingDiscard.js";
import RevealHand from "./RevealHand.js";

import LifeBar from "components/LifeBar/LifeBar.js";
import { adjustLP, resetSolo } from "stateStore/actions/field.js";
import { prepopLP } from "stateStore/actions/settings.js";
import { setTurn, nextPhase, prevPhase } from "stateStore/actions/turn.js";
import { HERO, VILLAIN, phases } from "utils/constants.js";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

const LPinput = "LPinput";

class StandardTools extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { LPmode: -1, dontSwap: false };
   }

   componentDidMount() {
      bind("up", this.props.prevPhase);
      bind("down", this.props.nextPhase);
   }

   componentWillUnmount() {
      unbind(["up", "down"]);
   }

   swapLPmode = () => {
      this.setState({ LPmode: this.state.LPmode * -1 });
   };

   submitMessage = (event) => {
      this.props.prepopLP(null);
      if (event.key === "Enter") {
         const trimmedMessage = Number(event.target.value.trim());
         if (trimmedMessage) {
            event.target.value = "";
            this.props.adjustLP(HERO, this.state.LPmode * trimmedMessage, this.props.heroLP);
         }
      }
   };

   render() {
      const { classes, discardPile, turn, heroLP, villainLP, prepopLP, prepopLPvalue, solo, resetSolo } = this.props;
      const { player, phase } = turn;
      const { LPmode, dontSwap } = this.state;

      const isHero = player === HERO;
      const myColor = isHero ? "info" : "danger";

      const LPinputField = document.getElementById(LPinput);
      if (LPinputField && prepopLPvalue) {
         if (dontSwap) this.setState({ dontSwap: false });
         else {
            if (prepopLPvalue === "half") {
               LPinputField.value = Math.floor(heroLP / 2);
               if (LPmode !== -1) this.swapLPmode();
            } else {
               LPinputField.value = Math.abs(prepopLPvalue);
               if (LPmode * prepopLPvalue < 0) this.swapLPmode();
            }
         }
      }

      const LPbutton = (
         <div
            className={classes.LPbutton}
            onClick={() => {
               this.swapLPmode();
               this.setState({ dontSwap: true });
               if (prepopLPvalue) prepopLP(null);
            }}
         >
            {LPmode === 1 ? <FaPlusCircle color="green" size="1.5em" /> : <FaMinusCircle color="yellow" size="1.5em" />}
         </div>
      );

      return (
         <div className={classes.container}>
            <LifeBar life={villainLP} player={VILLAIN} />
            {phases.map((aPhase, index) => (
               <Button
                  color={myColor}
                  round
                  style={{ opacity: aPhase === phase || 0.8, border: aPhase === phase && "solid 3px white" }}
                  key={index}
                  onClick={isHero ? () => this.props.setTurn(player, aPhase) : undefined}
               >
                  {aPhase}
               </Button>
            ))}
            <ShowingDiscard discardPile={discardPile} />
            <RevealHand />
            <LifeBar life={heroLP} player={HERO} />
            {solo ? (
               <ButtonRow>
                  <Button color="primary" fullWidth round onClick={resetSolo}>
                     Reset
                  </Button>
                  <Button color="primary" fullWidth round href="/wall">
                     Quit
                  </Button>
               </ButtonRow>
            ) : (
               <Button color="primary" fullWidth round>
                  Concede
               </Button>
            )}
            <div className={classes.LPbox}>
               <CustomInput
                  id={LPinput}
                  white
                  formControlProps={{
                     fullWidth: true
                  }}
                  inputProps={{
                     onKeyPress: this.submitMessage,
                     startAdornment: LPbutton,
                     margin: "dense"
                  }}
               />
               <Switches />
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      turn: state.turn,
      villainLP: state.field.villain.lifepoints,
      heroLP: state.field.hero.lifepoints,
      prepopLPvalue: state.settings.prepopLP
   };
}

StandardTools.propTypes = {
   discardPile: PropTypes.string.isRequired,
   solo: PropTypes.bool
};

export default connect(mapStateToProps, {
   setTurn,
   nextPhase,
   prevPhase,
   adjustLP,
   prepopLP,
   resetSolo
})(withStyles(styles)(StandardTools));
