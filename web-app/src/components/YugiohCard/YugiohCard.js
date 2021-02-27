import React, { Fragment } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
import PropTypes from "prop-types";

import getCardDetails from "utils/getCardDetails.js";
import compress from "utils/compressName.js";

import { newHover, clearHover } from "stateStore/actions/hoverCard.js";
import { newSelection, clearSelection } from "stateStore/actions/selectedCard.js";
import { moveCard } from "stateStore/actions/field.js";

const useStyles = makeStyles(cardStyle);
const cardRatio = 1.45;

export default function YugiohCard(props) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const { height, notFull, player, row, zone } = props;
   const inDef = false; // we should change this to be state-based

   const selection = useSelector((state) => state.selectedCard);
   const selected = selection && selection.player === player && selection.row === row && selection.zone === zone;

   const [{ isDragging }, drag] = useDrag({
      item: { type: "card", player, row, zone },
      canDrag: () => {
         return player === "hero";
      },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging()
      })
   });

   const [{ isOver }, drop] = useDrop({
      accept: "card",
      canDrop: () => droppable(),
      drop: (item) => {
         dispatch(moveCard({ from: item, to: { player, row, zone } }));
         dispatch(clearSelection());
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   });

   const card = useSelector((state) => state.field[player][row][zone]);
   const blank = !card || isDragging ? true : false;
   const name = card ? card.name : null;

   const { cardType, attribute, levelOrSubtype, atk, def } = getCardDetails(name);

   let nameColor, nameHeight, cardTypeIcon, subtitle, isMonster;
   if (!blank) {
      isMonster = cardType.includes("Monster");
      nameColor = cardType === "spell" || cardType === "trap" ? "white" : "black";
      nameHeight = (height - height / cardRatio) / 4 + 1;
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
         ref={blank && !isDragging ? drop : drag}
         className={classes.container}
         style={{
            width: height / cardRatio,
            height: height,
            marginLeft: notFull ? 0 : (height / cardRatio) * 0.25,
            marginRight: notFull ? 0 : (height / cardRatio) * 0.25,
            transform: inDef ? "rotate(90deg)" : "rotate(0deg)",
            opacity: (isDragging || blank) && row === "hand" ? 0 : 1,
            borderColor: selected || isOver ? "green" : "#292c42",
            backgroundImage: !blank && 'url("/cards/bgs/' + cardType + '.jpg")'
         }}
         onClick={() => {
            if (!blank) dispatch(newSelection({ player, row, zone, name }));
         }}
         onMouseEnter={() => {
            if (!blank) dispatch(newHover(name));
         }}
         onMouseLeave={() => {
            if (!blank) dispatch(clearHover());
         }}
      >
         {!blank && (
            <Fragment>
               <div
                  className={classes.art}
                  style={{ backgroundImage: 'url("/cards/small/' + compress(name) + '.jpg")' }}
               ></div>
               <div
                  className={classes.monsterStats}
                  style={{
                     fontSize: nameHeight * 1.29 + "px",
                     lineHeight: nameHeight * 1.29 + "px"
                  }}
               >
                  {isMonster && atk + " / " + def}
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

function getSubtitle(starsOrAlt, height) {
   if (Number.isInteger(starsOrAlt)) {
      const starList = [];
      for (let i = 0; i < starsOrAlt - 1; i++) {
         starList.push(
            <div key={i}>
               <img src="/cards/svgs/star.svg" height={height} alt="yugioh star" />
            </div>
         );
      }
      return starList;
   } else {
      return <img src={"/cards/svgs/" + starsOrAlt + ".svg"} height={height} alt="yugioh subtype" />;
   }
}

function droppable() {
   return true;
}

YugiohCard.propTypes = {
   notFull: PropTypes.bool,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   zone: PropTypes.number
};
