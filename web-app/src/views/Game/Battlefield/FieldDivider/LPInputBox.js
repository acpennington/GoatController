import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CustomInput from "components/CustomInput/CustomInput.js";
import { adjustLP } from "stateStore/actions/game/field.js";
import { prepopLP } from "stateStore/actions/shared/settings.js";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";

class LPInputBox extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { inputLP: "", LPmode: -1 };
   }

   componentDidUpdate() {
      const { prepopLPvalue, lifepoints } = this.props;
      const { inputLP } = this.state;

      const convertedPrepop = prepopLPvalue && (prepopLPvalue === "half" ? Math.floor(lifepoints / 2) : Math.abs(prepopLPvalue));

      if (prepopLPvalue && convertedPrepop !== Number(inputLP))
         this.setState({ inputLP: convertedPrepop, LPmode: prepopLPvalue === "half" || prepopLPvalue < 0 ? -1 : 1 });
   }

   inputLP = (event) => {
      const { prepopLP, prepopLPvalue } = this.props;
      const value = event.target.value;

      if (!isNaN(value)) {
         if (prepopLPvalue) {
            // eslint-disable-next-line
            this.state.inputLP = value;
            prepopLP(null);
         }

         this.setState({ inputLP: value });
      }
   };

   swapLPmode = () => {
      this.setState({ LPmode: this.state.LPmode * -1 });
   };

   submitMessage = (event) => {
      const { prepopLP, heroPlayer, lifepoints, adjustLP } = this.props;

      if (event.key === "Enter") {
         const trimmedNumber = Number(event.target.value.trim());
         if (trimmedNumber) {
            // eslint-disable-next-line
            this.state.inputLP = "";
            adjustLP(heroPlayer, this.state.LPmode * trimmedNumber, lifepoints, this.context);
            prepopLP(null);
            this.setState({ inputLP: "" });
         }
      }
   };

   render() {
      const { classes, prepopLPvalue } = this.props;
      const { inputLP, LPmode } = this.state;

      const LPbutton = (
         <div
            className={classes.LPbutton}
            onClick={() => {
               this.swapLPmode();
               if (prepopLPvalue) prepopLP(null);
            }}
         >
            {LPmode === 1 ? <FaPlusCircle color="green" size="1.5em" /> : <FaMinusCircle color="yellow" size="1.5em" />}
         </div>
      );

      return (
         <div className={classes.LPbox}>
            <CustomInput
               white
               formControlProps={{ fullWidth: true }}
               inputProps={{
                  value: inputLP,
                  onChange: this.inputLP,
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
   return { prepopLPvalue: state.settings.prepopLP };
}

LPInputBox.propTypes = {
   classes: PropTypes.object.isRequired,
   heroPlayer: PropTypes.string.isRequired,
   lifepoints: PropTypes.number.isRequired
};

export default connect(mapStateToProps, { adjustLP, prepopLP })(withStyles(styles)(LPInputBox));
