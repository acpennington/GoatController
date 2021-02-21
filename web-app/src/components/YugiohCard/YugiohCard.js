import React, { Fragment } from "react";
import { useDrag, useDrop } from "react-dnd";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
import PropTypes from "prop-types";

import compress from "utils/compressName.js";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(cardStyle);
const ItemTypes = {
   CARD: "card"
};
const cardRatio = 1.45;

export default function YugiohCard(props) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const {
      cardType,
      name,
      atk,
      def,
      height,
      attribute,
      levelOrSubtype,
      blank,
      inDef,
      notFull,
      undraggable,
      player,
      row,
      zone
   } = props;

   const selected = false;

   const [{ isDragging }, drag] = useDrag({
      item: { type: ItemTypes.CARD },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging()
      })
   });

   const [{ isOver }, drop] = useDrop({
      accept: ItemTypes.CARD,
      drop: () => {
         console.log("dropped");
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   });

   let cardBg, nameColor, cardArt, nameHeight, cardTypeIcon, subtitle, isMonster;
   if (!blank) {
      isMonster = cardType.includes("Monster");
      [cardBg, nameColor] = getColors(cardType);
      cardArt = (
         <img src={"/cards/small/" + compress(name) + ".jpg"} width={height / cardRatio - 7 + "px"} alt={name} />
      );
      nameHeight = height / 3 / 4 - 1;
      cardTypeIcon = (
         <img
            src={"/cards/svgs/" + (isMonster ? attribute : cardType) + ".svg"}
            height={nameHeight * 1.05 + "px"}
            alt=""
         />
      );
      subtitle = getSubtitle(levelOrSubtype, nameHeight * 0.67);
   }

   return (
      <div
         ref={undraggable ? null : blank ? drop : drag}
         className={classes.container}
         style={{
            width: height / cardRatio,
            height: height,
            marginLeft: notFull ? 0 : (height / cardRatio) * 0.25,
            marginRight: notFull ? 0 : (height / cardRatio) * 0.25,
            transform: inDef ? "rotate(90deg)" : "rotate(0deg)",
            opacity: isDragging ? 0 : 1
         }}
         onClick={
            blank
               ? null
               : () => {
                    console.log("clicked");
                    dispatch({ type: "NEW_SELECTION", data: { player, row, zone, name } });
                 }
         }
         onMouseEnter={
            blank
               ? null
               : () => {
                    dispatch({ type: "NEW_HOVER", data: name });
                 }
         }
         onMouseLeave={
            blank
               ? null
               : () => {
                    dispatch({ type: "CLEAR_HOVER", data: "" });
                 }
         }
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
                  fill={blank ? "rgba(0,0,0,0.8)" : cardBg}
                  stroke={selected || isOver ? "green" : "#292c42"}
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
                     {isMonster && (
                        <Fragment>
                           {atk} / {def}
                        </Fragment>
                     )}
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

function getSubtitle(starsOrAlt, height) {
   if (Number.isInteger(starsOrAlt)) {
      const star = <img src="/cards/svgs/star.svg" height={height} alt="yugioh star" />;
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
      return <img src={"/cards/svgs/" + starsOrAlt + ".svg"} height={height} alt="yugioh subtype" />;
   }
}

YugiohCard.propTypes = {
   blank: PropTypes.bool,
   inDef: PropTypes.bool,
   notFull: PropTypes.bool,
   undraggable: PropTypes.bool
};
