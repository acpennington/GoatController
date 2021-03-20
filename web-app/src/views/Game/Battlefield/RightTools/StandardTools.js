import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

import LifeBar from "components/LifeBar/LifeBar.js";
import { adjustLP, revealHand } from "stateStore/actions/field.js";
import { switchDiscard } from "stateStore/actions/settings.js";
import { setTurn, nextPhase, prevPhase } from "stateStore/actions/turn.js";
import { HERO, VILLAIN, discardZones, phases } from "utils/constants.js";

class StandardTools extends PureComponent {
   constructor(props) {
      super(props);
      const storage = window.localStorage;
      if (storage.getItem("soundOn") === null) storage.setItem("soundOn", true);
      this.state = { LPmode: -1, soundOn: storage.getItem("soundOn") === "true" };
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

   flipSound = (event) => {
      const storage = window.localStorage;
      storage.setItem("soundOn", event.target.checked);
      this.setState({ soundOn: event.target.checked });
   };

   submitMessage = (event) => {
      if (event.key === "Enter") {
         const trimmedMessage = Number(event.target.value.trim());
         if (trimmedMessage) {
            event.target.value = "";
            this.props.adjustLP(HERO, this.state.LPmode * trimmedMessage, this.props.heroLP);
         }
      }
   };

   render() {
      const { classes, discardPile, turn, heroLP, villainLP, handRevealed } = this.props;
      const { player, phase } = turn;
      const { soundOn, LPmode } = this.state;
      const otherZone = discardZones.filter((zone) => zone !== discardPile)[0];
      const isHero = player === HERO;
      const myColor = isHero ? "info" : "danger";
      const LPbutton = (
         <div className={classes.LPbutton} onClick={this.swapLPmode}>
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
               <Button color="primary" onClick={this.props.switchDiscard}>
                  Showing
                  <br />
                  {discardPile}
               </Button>
            </Tooltip>
            <Button color={"primary"} onClick={this.props.revealHand}>
               {handRevealed ? "Stop Revealing" : "Reveal Hand"}
            </Button>
            <LifeBar life={heroLP} player={HERO} />
            <div className={classes.LPbox}>
               <CustomInput
                  id="LP"
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
               <Switch
                  checked={soundOn}
                  onChange={(event) => this.flipSound(event)}
                  color="primary"
                  style={{ color: "#9c27b0" }}
               />
               Sound {soundOn ? "On" : "Off"}
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
      handRevealed: state.field.hero.handRevealed
   };
}

StandardTools.propTypes = {
   discardPile: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { switchDiscard, setTurn, nextPhase, prevPhase, adjustLP, revealHand })(
   withStyles(styles)(StandardTools)
);
