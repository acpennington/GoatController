import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import ButtonRow from "components/CustomButtons/ButtonRow.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Tooltip from "@material-ui/core/Tooltip";

import Switches from "./Switches.js";
import LifeBar from "components/LifeBar/LifeBar.js";
import { adjustLP, revealHand, resetSolo } from "stateStore/actions/field.js";
import { switchDiscard, prepopLP } from "stateStore/actions/settings.js";
import { setTurn, nextPhase, prevPhase } from "stateStore/actions/turn.js";
import { HERO, VILLAIN, GRAVEYARD, discardZones, phases } from "utils/constants.js";

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
      bind("s", this.props.switchDiscard);
      bind("up", this.props.prevPhase);
      bind("down", this.props.nextPhase);
   }

   componentWillUnmount() {
      unbind(["s", "up", "down"]);
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
      const {
         classes,
         discardPile,
         turn,
         heroLP,
         villainLP,
         handRevealed,
         prepopLP,
         prepopLPvalue,
         solo,
         resetSolo
      } = this.props;
      const { player, phase } = turn;
      const { LPmode, dontSwap } = this.state;

      const otherZone = discardZones.filter((zone) => zone !== discardPile)[0];
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
            <Tooltip
               id="switch discard"
               title={"Click to switch to " + otherZone}
               placement="bottom"
               classes={{ tooltip: classes.tooltip }}
            >
               <Button
                  onClick={this.props.switchDiscard}
                  style={
                     discardPile === GRAVEYARD
                        ? {
                             backgroundImage:
                                'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/cards/art/CalloftheHaunted.jpg")',
                             backgroundPosition: "50% 95%"
                          }
                        : {
                             backgroundImage:
                                'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/DimensionFusion.jpg")'
                          }
                  }
               >
                  Showing
                  <br />
                  {discardPile}
               </Button>
            </Tooltip>
            <Button
               onClick={this.props.revealHand}
               style={
                  handRevealed
                     ? {
                          backgroundImage:
                             'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/InfiniteCards.jpg")',
                          backgroundPosition: "50% 15%"
                       }
                     : {
                          backgroundImage:
                             'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/Ante.jpg")'
                       }
               }
            >
               {handRevealed ? "Stop Revealing" : "Reveal Hand"}
            </Button>
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
      handRevealed: state.field.hero.handRevealed,
      prepopLPvalue: state.settings.prepopLP
   };
}

StandardTools.propTypes = {
   discardPile: PropTypes.string.isRequired,
   solo: PropTypes.bool
};

export default connect(mapStateToProps, {
   switchDiscard,
   setTurn,
   nextPhase,
   prevPhase,
   adjustLP,
   revealHand,
   prepopLP,
   resetSolo
})(withStyles(styles)(StandardTools));
