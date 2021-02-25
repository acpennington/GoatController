import React, { Fragment } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
import PropTypes from "prop-types";

import getCardDetails from "utils/getCardDetails.js";
import compress from "utils/compressName.js";

const useStyles = makeStyles(cardStyle);
const cardRatio = 1.45;

export default function YugiohCard(props) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const { height, inDef, notFull, player, row, zone } = props;

   const selection = useSelector((state) => state.selectedCard);
   const selected = selection && selection.player === player && selection.row === row && selection.zone === zone;

   const [{ isDragging }, drag] = useDrag({
      item: { type: "card", player, row, zone },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging()
      })
   });

   const [{ isOver }, drop] = useDrop({
      accept: "card",
      drop: (item) => {
         dispatch({ type: "MOVE_CARD", data: { from: item, to: { player, row, zone } } });
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   });

   const card = useSelector((state) => state.field[player][row][zone]);
   const blank = !card || isDragging ? true : false;
   const name = card ? card.name : null;

   const { cardType, attribute, levelOrSubtype, atk, def } = getCardDetails(name);

   let nameColor, cardArt, nameHeight, cardTypeIcon, subtitle, isMonster;
   if (!blank) {
      isMonster = cardType.includes("Monster");
      nameColor = cardType === "spell" || cardType === "trap" ? "white" : "black";
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
         ref={blank && !isDragging ? drop : drag}
         className={classes.container}
         style={{
            width: height / cardRatio,
            height: height,
            marginLeft: notFull ? 0 : (height / cardRatio) * 0.25,
            marginRight: notFull ? 0 : (height / cardRatio) * 0.25,
            transform: inDef ? "rotate(90deg)" : "rotate(0deg)",
            opacity: (isDragging || blank) && row === "hand" ? 0 : 1
         }}
         onClick={() => {
            if (!blank) dispatch({ type: "NEW_SELECTION", data: { player, row, zone, name } });
         }}
         onMouseEnter={() => {
            if (!blank) dispatch({ type: "NEW_HOVER", data: name });
         }}
         onMouseLeave={() => {
            if (!blank) dispatch({ type: "CLEAR_HOVER" });
         }}
      >
         <div
            className={classes.background}
            style={{
               height: height,
               width: height / cardRatio,
               borderColor: selected || isOver ? "green" : "#292c42",
               backgroundImage: !blank && 'url("/cards/bgs/' + cardType + '.jpg")',
               backgroundColor: "rgba(0,0,0,0.8)"
            }}
         ></div>
         {!blank && (
            <Fragment>
               <div className={classes.art}>
                  {cardArt}
                  <br />
                  <div
                     className={classes.monsterStats}
                     style={{
                        fontSize: nameHeight * 1.29 + "px",
                        lineHeight: nameHeight * 1.29 + "px",
                        paddingTop: nameHeight * 0.29 + "px"
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
   inDef: PropTypes.bool,
   notFull: PropTypes.bool,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   zone: PropTypes.number
};
