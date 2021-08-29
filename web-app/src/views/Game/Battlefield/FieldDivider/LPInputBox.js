import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CustomInput from "components/CustomInput/CustomInput.js";
import { adjustLP } from "stateStore/actions/game/field.js";
import { prepopLP } from "stateStore/actions/shared/settings.js";
import { BANISHED, MONSTER, PREPOP_LP_HELPER, HAND, GRAVEYARD, SPELL_TRAP, FIELD_SPELL } from "shared/constants.js";
import checkParams from "utils/checkParams.js";
import { WebSocketContext } from "views/Game/WebSocketContext";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";

class LPInputBox extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { inputLP: "", LPmode: -1 };
      this.ref = React.createRef();
   }

   convertPrepopLP() {
      const { field, activeCard, lifepoints, prepopLPvalue: prepopLP } = this.props;
      if (!prepopLP) return undefined;
      if (typeof prepopLP === "number") return prepopLP;
      if (prepopLP === "half") return -Math.floor(lifepoints / 2);

      const { name, params } = prepopLP;

      let hero = activeCard.player;
      let villain;
      for (const player in field) {
         if (player !== hero) {
            villain = player;
            break;
         }
      }

      const counters = field[activeCard.player]?.[activeCard.row]?.[activeCard.zone]?.counters;

      switch (name) {
         case PREPOP_LP_HELPER.COUNTER:
            return counters && params * counters;
         case PREPOP_LP_HELPER.EXPONENTIAL_COUNTER:
            return counters ? params * 2 ** (counters - 1) : 0;
         case PREPOP_LP_HELPER.FIELD_MONSTER:
            return this.monsters(params);
         case PREPOP_LP_HELPER.HERO_GRAVEYARD:
            return this.graveyard(params, hero);
         case PREPOP_LP_HELPER.HERO_MONSTER:
            return this.monsters(params, hero);
         case PREPOP_LP_HELPER.VILLAIN_BANISHED:
            return params * field[villain][BANISHED].length;
         case PREPOP_LP_HELPER.VILLAIN_FIELD:
            return this.field(params, villain);
         case PREPOP_LP_HELPER.VILLAIN_HAND_AND_FIELD:
            return this.handAndField(params, villain);
         case PREPOP_LP_HELPER.VILLAIN_HAND:
            return params * field[villain][HAND].length;
         case PREPOP_LP_HELPER.VILLAIN_GRAVEYARD:
            return this.graveyard(params, villain);
         case PREPOP_LP_HELPER.VILLAIN_MONSTER:
            return this.monsters(params, villain);
         default:
            console.log("Error: Undefined card script");
      }
   }

   graveyard(params, player) {
      const { field } = this.props;
      let cards = 0;
      for (const key in field) {
         if (player && player !== key) continue;
         for (const card of field[key][GRAVEYARD]) {
            if (typeof params === "object" && params.filter && checkParams(card, params.filter).fail.length) continue;
            cards++;
         }
      }
      return typeof params === "number" ? params * cards : +(params.base || 0) + cards * (params.multiplier || 0);
   }

   monsters(params, player) {
      const { field } = this.props;
      let monsters = 0;
      for (const key in field) {
         if (player && player !== key) continue;
         for (const monster of field[key][MONSTER]) {
            if (monster) {
               if (typeof params === "object") {
                  if (params.filter && checkParams(monster, params.filter).fail.length) continue;
                  if (params.faceup && monster.facedown) continue;
               }
               monsters++;
            }
         }
      }
      return monsters * (typeof params === "number" ? params : params.multiplier);
   }

   componentDidUpdate() {
      const { inputLP } = this.state;
      const convertedPrepop = this.convertPrepopLP();

      if (convertedPrepop && convertedPrepop !== Number(inputLP)) {
         this.setState({ inputLP: Math.abs(convertedPrepop), LPmode: convertedPrepop < 0 ? -1 : 1 });
         this.ref.current.focus();
      } else if (!inputLP && !convertedPrepop) this.setState({ inputLP: "" });
   }

   field(params, player) {
      const { field } = this.props;
      const fn = typeof params === "object" && params.filter ? (c) => c && !checkParams(c, params.filter).fail.length : Boolean;
      const monster = field[player][MONSTER].filter(fn).length;
      const spellTrap = field[player][SPELL_TRAP].filter(fn).length;
      const fieldSpell = fn(field[player][FIELD_SPELL]) ? 1 : 0;
      const multiplier = typeof params === "object" ? params.multiplier : params;
      return multiplier * (monster + spellTrap + fieldSpell);
   }

   handAndField(params, player) {
      const { field } = this.props;
      const fn = typeof params === "object" && params.filter ? (c) => c && !checkParams(c, params.filter).fail.length : Boolean;
      const multiplier = typeof params === "object" ? params.multiplier : params;
      return multiplier * field[player][HAND].filte(fn).length + this.field(params, player);
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
            onClick={() => {
               this.swapLPmode();
               if (prepopLPvalue) prepopLP(null);
            }}
         >
            {LPmode === 1 ? <FaPlusCircle color="green" size="1.5em" /> : <FaMinusCircle color="yellow" size="1.5em" />}
         </div>
      );

      return (
         <div>
            <CustomInput
               ref={this.ref}
               white
               formControlProps={{ fullWidth: true }}
               inputCustomClasses={classes.LPinput}
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

function mapStateToProps(state, ownProps) {
   return {
      field: state.field,
      activeCard: state.selectedCard[ownProps.heroPlayer] || state.hoverCard,
      prepopLPvalue: state.settings.prepopLP
   };
}

LPInputBox.propTypes = {
   classes: PropTypes.object.isRequired,
   heroPlayer: PropTypes.string.isRequired,
   lifepoints: PropTypes.number.isRequired
};

LPInputBox.contextType = WebSocketContext;

export default connect(mapStateToProps, { adjustLP, prepopLP })(withStyles(styles)(LPInputBox));
