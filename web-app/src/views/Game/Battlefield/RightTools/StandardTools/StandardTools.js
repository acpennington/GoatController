import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import ButtonRow from "components/CustomButtons/ButtonRow.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Counters from "./Counters.js";
import ConcedeButton from "./ConcedeButton.js";
import Switches from "./Switches.js";
import ShowingDiscard from "./ShowingDiscard.js";
import RevealHandButton from "./RevealHandButton.js";
import Phases from "./Phases.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";
import LifeBar from "components/LifeBar/LifeBar.js";
import { adjustLP, resetSolo } from "stateStore/actions/field.js";
import { prepopLP } from "stateStore/actions/settings.js";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

const LPinput = "LPinput";

class StandardTools extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { LPmode: -1, dontSwap: false };
   }

   swapLPmode = () => {
      this.setState({ LPmode: this.state.LPmode * -1 });
   };

   submitMessage = (event) => {
      const { prepopLP, player, lifepoints, adjustLP } = this.props;
      prepopLP(null);
      if (event.key === "Enter") {
         const trimmedNumber = Number(event.target.value.trim());
         if (trimmedNumber) {
            event.target.value = "";
            adjustLP(player.name, this.state.LPmode * trimmedNumber, lifepoints.hero, this.context);
         }
      }
   };

   render() {
      const { classes, discardPile, prepopLP, prepopLPvalue, player, resetSolo, lifepoints } = this.props;

      const { name, solo } = player;
      const { LPmode, dontSwap } = this.state;

      const LPinputField = document.getElementById(LPinput);
      if (LPinputField && prepopLPvalue) {
         if (dontSwap) this.setState({ dontSwap: false });
         else {
            if (prepopLPvalue === "half") {
               LPinputField.value = Math.floor(lifepoints.hero / 2);
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
            {solo ? (
               <ButtonRow>
                  <Button color="primary" fullWidth round onClick={() => resetSolo(name)}>
                     Reset
                  </Button>
                  <Button color="primary" fullWidth round href="/wall">
                     Quit
                  </Button>
               </ButtonRow>
            ) : (
               <ConcedeButton />
            )}
            <LifeBar life={lifepoints.villain} isHero={false} />
            <Phases heroPlayer={player.name} />
            <ShowingDiscard discardPile={discardPile} />
            <RevealHandButton name={name} />
            <Counters heroPlayer={player.name} />
            <LifeBar life={lifepoints.hero} isHero={true} />
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

function mapStateToProps(state, ownProps) {
   const { name } = ownProps.player;
   const { field, settings } = state;

   const lifepoints = {};
   for (const key in field)
      if (key === name) lifepoints.hero = field[key].lifepoints;
      else lifepoints.villain = field[key].lifepoints;

   return {
      lifepoints,
      prepopLPvalue: settings.prepopLP
   };
}

StandardTools.propTypes = {
   discardPile: PropTypes.string.isRequired,
   player: PropTypes.object.isRequired
};

StandardTools.contextType = WebSocketContext;

export default connect(mapStateToProps, { adjustLP, prepopLP, resetSolo })(withStyles(styles)(StandardTools));
