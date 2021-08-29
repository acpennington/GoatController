import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import CardFinder from "components/CardFinder/CardFinder.js";
import GenericFinder from "components/CardFinder/GenericFinder.js";
import { newResults } from "stateStore/actions/deckConstructor/searchResults.js";
import {
   allCardTypes,
   EFFECT_MONSTER,
   MONSTER,
   NORMAL_MONSTER,
   RITUAL_MONSTER,
   SPELL,
   SPELL_TRAP,
   TRAP,
   allSubtypes,
   spellSubtypes,
   trapSubtypes,
   allAttributes,
   allMonsterTypes
} from "shared/constants.js";
import display from "shared/display.js";
import checkParams from "utils/checkParams";
import { nonfusions } from "shared/database";

import { FaSearch } from "react-icons/fa";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class CardSearch extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { params: {} };
   }

   setName = (event) => {
      const name = { operator: "CONTAINS", value: event.target.value };
      this.setState({ params: { ...this.state.params, name } });
   };

   setDesc = (event) => {
      const text = { operator: "CONTAINS", value: event.target.value };
      this.setState({ params: { ...this.state.params, text } });
   };

   setCardType = (value) => {
      const cardType = { value };
      if (value === MONSTER) cardType.operator = "CONTAINS";
      else if (value === SPELL_TRAP) {
         cardType.operator = "OR";
         cardType.value = [SPELL, TRAP];
      }

      const params = { cardType };
      if (this.state.params.name) params.name = this.state.params.name;
      if (this.state.params.text) params.text = this.state.params.text;

      this.setState({ params });
   };

   setCardSubtype = (value) => {
      const levelOrSubtype = { value };
      this.setState({ params: { ...this.state.params, levelOrSubtype } });
   };

   setAttribute = (value) => {
      const attribute = { value };
      this.setState({ params: { ...this.state.params, attribute } });
   };

   setMonsterType = (value) => {
      const text2 = { operator: "TYPEMATCH", value };
      this.setState({ params: { ...this.state.params, text2 } });
   };

   setNumberParam = (event, operator, param) => {
      const { value } = event.target;
      if (isNaN(value)) {
         const params = this.state.params;
         delete params.levelOrSubtype;
         this.setState({ params });
      } else {
         const paramToAdd = { operator, value: Number(value) };
         this.setState({ params: { ...this.state.params, [param]: paramToAdd } });
      }
   };

   setLevelStart = (event) => this.setNumberParam(event, ">", "levelOrSubtype");
   setLevelEnd = (event) => this.setNumberParam(event, "<", "levelOrSubtype2");
   setAtkStart = (event) => this.setNumberParam(event, ">", "atk");
   setAtkEnd = (event) => this.setNumberParam(event, "<", "atk2");
   setDefStart = (event) => this.setNumberParam(event, ">", "def");
   setDefEnd = (event) => this.setNumberParam(event, "<", "def2");

   getResults = (value) => this.props.newResults([value]);

   search = () => {
      const { params } = this.state;
      const results = [];

      for (const cardName in nonfusions) {
         const { fail } = checkParams({ name: cardName }, params);
         if (fail.length === 0) results.push(cardName);
      }

      this.props.newResults(results);
   };

   renderMonsterParams = () => {
      const { classes } = this.props;
      return (
         <Fragment>
            <div className={classes.flexRow}>
               <span className={classes.descSpan}>Attribute:</span>
               <GenericFinder
                  options={allAttributes.map((attribute) => {
                     return { value: attribute, name: attribute };
                  })}
                  onChange={this.setAttribute}
               />
            </div>
            <div className={classes.flexRow}>
               <span className={classes.descSpan}>Monster Type:</span>
               <GenericFinder
                  options={allMonsterTypes.map((monsterType) => {
                     return { value: monsterType, name: monsterType };
                  })}
                  onChange={this.setMonsterType}
               />
            </div>
            <div className={classes.flexRow}>
               <CustomInput
                  id="lessThanLevel"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     onChange: this.setLevelStart,
                     margin: "dense"
                  }}
               />
               <span className={classes.betweenSpan}>≤ Level ≤</span>
               <CustomInput
                  id="greaterThanLevel"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     onChange: this.setLevelEnd,
                     margin: "dense"
                  }}
               />
            </div>
            <div className={classes.flexRow}>
               <CustomInput
                  id="lessThanATK"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     onChange: this.setAtkStart,
                     margin: "dense"
                  }}
               />
               <span className={classes.betweenSpan}>≤ ATK ≤</span>
               <CustomInput
                  id="greaterThanATK"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     onChange: this.setAtkEnd,
                     margin: "dense"
                  }}
               />
            </div>
            <div className={classes.flexRow}>
               <CustomInput
                  id="lessThanDEF"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     onChange: this.setDefStart,
                     margin: "dense"
                  }}
               />
               <span className={classes.betweenSpan}>≤ DEF ≤</span>
               <CustomInput
                  id="greaterThanDEF"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     onChange: this.setDefEnd,
                     margin: "dense"
                  }}
               />
            </div>
         </Fragment>
      );
   };

   renderSpellTrapParams = (subtypes) => {
      const { classes } = this.props;

      return (
         <div className={classes.flexRow}>
            <span className={classes.descSpan}>Card Subtype:</span>
            <GenericFinder
               options={subtypes.map((subtype) => {
                  return { value: subtype, name: subtype };
               })}
               onChange={this.setCardSubtype}
            />
         </div>
      );
   };

   renderSpecificParams = (cardType) => {
      if (typeof cardType === "object") cardType = SPELL_TRAP;
      switch (cardType) {
         case MONSTER:
         case NORMAL_MONSTER:
         case RITUAL_MONSTER:
         case EFFECT_MONSTER:
            return this.renderMonsterParams();
         case SPELL_TRAP:
            return this.renderSpellTrapParams(allSubtypes);
         case SPELL:
            return this.renderSpellTrapParams(spellSubtypes);
         case TRAP:
            return this.renderSpellTrapParams(trapSubtypes);
         default:
            return null;
      }
   };

   render() {
      const { classes } = this.props;
      const { params } = this.state;

      return (
         <Fragment>
            <div className={classes.flexRow}>
               <span className={classes.descSpan}>Quick Find:</span>
               <CardFinder withFusions={false} onChange={this.getResults} />
            </div>
            <div className={classes.flexRow}>
               <span className={classes.descSpan}>Name Contains:</span>
               <CustomInput
                  id="nameContains"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     onChange: this.setName,
                     margin: "dense"
                  }}
               />
            </div>
            <div className={classes.flexRow}>
               <span className={classes.descSpan}>Description Contains:</span>
               <CustomInput
                  id="descContains"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     onChange: this.setDesc,
                     margin: "dense"
                  }}
               />
            </div>
            <div className={classes.flexRow}>
               <span className={classes.descSpan}>Card Type:</span>
               <GenericFinder
                  options={allCardTypes.map((type) => {
                     return { value: type, name: display(type) };
                  })}
                  onChange={this.setCardType}
               />
            </div>
            {params.cardType && this.renderSpecificParams(params.cardType.value)}
            <div className={classes.center}>
               <Button size="lg" color="primary" round onClick={this.search} style={{ marginBottom: "10px" }}>
                  <FaSearch /> Search
               </Button>
            </div>
         </Fragment>
      );
   }
}

CardSearch.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(null, { newResults })(withStyles(styles)(CardSearch));
