import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CustomInput from "components/CustomInput/CustomInput.js";
import { prepopLP } from "stateStore/actions/shared/settings.js";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";

class LPInputBox extends PureComponent {
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
      const { classes, prepopLPvalue } = this.props;
      const { LPmode, dontSwap } = this.state;

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
         <div className={classes.LPbox}>
            <CustomInput
               id={"LPinput"}
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
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { prepopLPvalue: state.settings.prepopLp };
}

export default connect(mapStateToProps, { prepopLP })(withStyles(styles)(LPInputBox));
