import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
import PropTypes from "prop-types";
const useStyles = makeStyles(cardStyle);

const cardRatio = 1.45;

export default function YugiohCard(props) {
   const classes = useStyles();
   const { cardType, name, height, attribute, levelOrSubtype, blank, selected, def, notFull } = props;

   let cardBg, nameColor, cardArt, nameHeight, cardTypeIcon, subtitle;
   if (!blank) {
      [cardBg, nameColor] = getColors(cardType);
      cardArt = (
         <img src={"/cards/small/" + compress(name) + ".jpg"} width={height / cardRatio - 7 + "px"} alt={name} />
      );
      nameHeight = height / 3 / 4 - 1;
      cardTypeIcon = (
         <img
            src={"/cards/svgs/" + (cardType.includes("Monster") ? attribute : cardType) + ".svg"}
            height={nameHeight * 1.05 + "px"}
         />
      );
      subtitle = getSubtitle(levelOrSubtype, nameHeight * 0.67);
   }

   return (
      <div
         className={classes.container}
         style={{
            width: height / cardRatio,
            height: height,
            marginLeft: notFull ? 0 : (height / cardRatio) * 0.25,
            marginRight: notFull ? 0 : (height / cardRatio) * 0.25,
            transform: def ? "rotate(90deg)" : "rotate(0deg)"
         }}
         onMouseEnter={log}
      >
         <div className={classes.svg}>
            <svg width={height / cardRatio} height={height}>
               <path
                  d={
                     "M7,2 h" +
                     (height / cardRatio - 14) +
                     " a5,5 0 0 1 5,5 v" +
                     (height - 14) +
                     " a5,5 0 0 1 -5,5 h-" +
                     (height / cardRatio - 14) +
                     " a5,5 0 0 1 -5,-5 v-" +
                     (height - 14) +
                     " a5,5 0 0 1 5,-5 z"
                  }
                  fill={blank ? "rgba(0,0,0,0.5)" : cardBg}
                  stroke={selected ? "green" : "#292c42"}
                  strokeWidth="3"
               />
            </svg>
         </div>
         {!blank && (
            <Fragment>
               <div className={classes.art}>
                  {cardArt}
                  <br />
                  <div
                     className={classes.monsterStats}
                     style={{
                        fontSize: nameHeight * 1.28 + "px",
                        lineHeight: nameHeight * 1.28 + "px",
                        paddingTop: nameHeight * 0.3 + "px"
                     }}
                  >
                     3000 / 2500
                  </div>
               </div>
               <div
                  className={classes.name}
                  style={{
                     fontSize: nameHeight + "px",
                     lineHeight: nameHeight + "px",
                     color: nameColor
                  }}
               >
                  {name}
               </div>
               <div className={classes.sideBySide} style={{ paddingTop: nameHeight * 2 + 5 + "px" }}>
                  <div
                     className={classes.icon}
                     style={{
                        lineHeight: nameHeight + "px"
                     }}
                  >
                     {cardTypeIcon}
                  </div>
                  <div
                     className={classes.subtitle}
                     style={{
                        lineHeight: nameHeight * 0.71 + "px"
                     }}
                  >
                     {subtitle}
                  </div>
               </div>
            </Fragment>
         )}
      </div>
   );
}

function getColors(cardType) {
   if (cardType === "normalMonster") return ["#fbc676", "black"];
   if (cardType === "effectMonster") return ["#c9823f", "black"];
   if (cardType === "ritualMonster") return ["#156db4", "black"];
   if (cardType === "fusionMonster") return ["#7f598c", "black"];
   if (cardType === "spell") return ["#1f8f97", "white"];
   if (cardType === "trap") return ["#9e427e", "white"];
}

function compress(name) {
   return name.replace(/[^a-zA-Z0-9]/g, "");
}

function log() {
   console.log("clicked");
}

function getSubtitle(starsOrAlt, height) {
   if (Number.isInteger(starsOrAlt)) {
      const star = <img src="/cards/svgs/star.svg" height={height} />;
      const starArray = [];
      for (let i = 0; i < starsOrAlt; i++) {
         starArray.push(
            <Fragment>
               {star}
               <br />
            </Fragment>
         );
      }
      return starArray;
   } else {
      return <img src={"/cards/svgs/" + starsOrAlt + ".svg"} height={height} />;
   }
}

YugiohCard.propTypes = {
   blank: PropTypes.bool,
   selected: PropTypes.bool,
   def: PropTypes.bool,
   notFull: PropTypes.bool
};
