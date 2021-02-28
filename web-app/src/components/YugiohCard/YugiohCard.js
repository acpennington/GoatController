import React, { Fragment, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
import PropTypes from "prop-types";

import getCardDetails from "utils/getCardDetails.js";
import compress from "utils/compressName.js";

import { newHover } from "stateStore/actions/hoverCard.js";
import { newSelection, clearSelection } from "stateStore/actions/selectedCard.js";
import { moveCard, switchPosition } from "stateStore/actions/field.js";
import { typesToList, typesToString } from "utils/convertTypes.js";
import {
   CARD_RATIO,
   HERO,
   FACEDOWN_CARD,
   stTypes,
   HAND,
   EXTRA_DECK,
   deckZones,
   discardZones,
   dndZones,
   MONSTER,
   CARD,
   OVER_COLOR,
   HERO_SELECTION_COLOR
} from "utils/constants.js";

const useStyles = makeStyles(cardStyle);

export default function YugiohCard({ height, notFull, player, row, zone }) {
   const classes = useStyles();
   const dispatch = useDispatch();

   let card = useSelector((state) => (zone !== -1 ? state.field[player][row][zone] : state.field[player][row]));
   if (discardZones.includes(row)) {
      const cardLength = card.length;
      if (cardLength === 0) {
         zone = 0;
         card = false;
      } else {
         zone = cardLength - 1;
         card = card[zone];
      }
   }

   const name = card && card.name;
   const deckZone = deckZones.includes(row);
   const facedown = name === FACEDOWN_CARD || deckZone || (card && card.facedown);
   const inDef = card && card.inDef && row === MONSTER ? card.inDef : false;
   const { cardType, attribute, levelOrSubtype, atk, def } = getCardDetails(name);

   const selection = useSelector((state) => state.selectedCard);
   const selected = selection && selection.player === player && selection.row === row && selection.zone === zone;

   const types = [player, row]; // need to flesh this out

   const [{ isDragging }, drag] = useDrag({
      item: { type: CARD, player, row, zone },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging()
      })
   });

   const [{ isOver }, drop] = useDrop({
      accept: CARD,
      drop: (item) => {
         dispatch(moveCard({ from: item, to: { player, row, zone } }));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   });

   const blank = (!card || isDragging) && !deckZone;
   let nameColor, nameHeight, cardTypeIcon, subtitle, isMonster;
   if (!blank && !facedown) {
      isMonster = !stTypes.includes(cardType);
      nameColor = isMonster ? "black" : "white";
      nameHeight = (height - height / CARD_RATIO) / 4 + 1;
      cardTypeIcon = (
         <img
            src={"/cards/svgs/attributes/" + (isMonster ? attribute : cardType) + ".svg"}
            height={nameHeight * 1.05 + "px"}
            alt=""
         />
      );
      subtitle = getSubtitle(levelOrSubtype, nameHeight * 0.67);
   }

   let dragOrDrop = useRef(null);
   if (player === HERO) {
      if (blank && !isDragging) dragOrDrop = drop;
      else {
         if (dndZones.includes(row)) drag(drop(dragOrDrop));
         else if (row !== EXTRA_DECK) dragOrDrop = drag;
      }
   } else {
      if (row === MONSTER && blank) dragOrDrop = drop;
   }

   return (
      <div
         ref={dragOrDrop}
         className={classes.container}
         style={{
            width: height / CARD_RATIO,
            height: height,
            marginLeft: notFull ? 0 : (height - height / CARD_RATIO) / 2,
            marginRight: notFull ? 0 : (height - height / CARD_RATIO) / 2,
            transform: inDef ? "rotate(90deg)" : "rotate(0deg)",
            opacity: (isDragging || blank) && row === HAND ? 0 : 1,
            borderColor: (isOver && OVER_COLOR) || (selected && HERO_SELECTION_COLOR),
            backgroundImage:
               !blank && (facedown ? 'url("/sleeves/goat.png")' : 'url("/cards/bgs/' + cardType + '.jpg")')
         }}
         onClick={() => {
            if (!blank && !deckZone) {
               if (!selected) dispatch(newSelection(player, row, zone, name));
               else {
                  if (player === HERO) dispatch(switchPosition(row, zone));
                  dispatch(clearSelection());
               }
            }
         }}
         onMouseEnter={() => {
            if (!blank && !deckZone) dispatch(newHover(name));
         }}
      >
         {!blank && !facedown && (
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
      for (let i = 0; i < starsOrAlt; i++) {
         starList.push(
            <div key={i}>
               <img src="/cards/svgs/subtypes/star.svg" height={height} alt="yugioh level star" />
            </div>
         );
      }
      return starList;
   } else return <img src={"/cards/svgs/subtypes/" + starsOrAlt + ".svg"} height={height} alt="yugioh subtype" />;
}

YugiohCard.propTypes = {
   height: PropTypes.number.isRequired,
   notFull: PropTypes.bool,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   zone: PropTypes.number
};

YugiohCard.defaultProps = {
   zone: -1
};
