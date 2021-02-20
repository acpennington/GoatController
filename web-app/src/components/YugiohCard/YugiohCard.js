import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { cardStyle } from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

const useStyles = makeStyles(cardStyle);

export default function YugiohCard(props) {
   const classes = useStyles();
   const { large, cardType, name } = props;

   const cardClasses = classNames({
      [classes.default]: true,
      [classes.cardSmall]: !large,
      [classes.cardLarge]: large,
      [classes.normalMonster]: cardType === "normalMonster",
      [classes.effectMonster]: cardType === "effectMonster",
      [classes.ritualMonster]: cardType === "ritualMonster",
      [classes.fusionMonster]: cardType === "fusionMonster",
      [classes.spell]: cardType === "spell",
      [classes.trap]: cardType === "trap"
   });

   return (
      <div className={cardClasses}>
         <strong>{name}</strong>
      </div>
   );
}

YugiohCard.propTypes = {
   large: PropTypes.bool
};
