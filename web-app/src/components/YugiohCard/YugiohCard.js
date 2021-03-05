import React, { useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
import PropTypes from "prop-types";

import getCardDetails from "utils/getCardDetails.js";

import CardArt from "./CardArt.js";
import { newHover } from "stateStore/actions/hoverCard.js";
import { newSelection, clearSelection } from "stateStore/actions/selectedCard.js";
import { moveCard, switchPosition } from "stateStore/actions/field.js";
import {
   CARD_RATIO,
   HERO,
   FACEDOWN_CARD,
   MONSTER,
   ST,
   FIELD_SPELL,
   HAND,
   EXTRA_DECK,
   deckZones,
   discardZones,
   dndZones,
   dynamicZones,
   OFF_FIELD,
   allTypes,
   OVER_COLOR,
   INVALID_COLOR,
   HERO_SELECTION_COLOR
} from "utils/constants.js";

const Mousetrap = require("mousetrap");
const useStyles = makeStyles(cardStyle);

export default function YugiohCard({ height, notFull, player, row, zone, discardPile }) {
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

   let type = row;
   if (dynamicZones.includes(row)) {
      if (atk) type = OFF_FIELD + MONSTER;
      else {
         if (levelOrSubtype === FIELD_SPELL) type = FIELD_SPELL;
         else type = OFF_FIELD + ST;
      }
   }

   const [{ isDragging }, drag] = useDrag({
      item: { type, player, row, zone },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging()
      })
   });

   let acceptables = allTypes;
   if (row === FIELD_SPELL) acceptables = FIELD_SPELL;
   else if (row === MONSTER) acceptables = [MONSTER, ST, OFF_FIELD + MONSTER];
   else if (row === ST) acceptables = [MONSTER, ST, OFF_FIELD + ST];
   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allTypes,
      canDrop: (item) => isAcceptable(item.type, acceptables),
      drop: (item) => {
         dispatch(moveCard({ from: item, to: { player, row, zone } }));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: !!monitor.canDrop()
      })
   });

   const blank = (!card || isDragging) && !deckZone;
   const nameHeight = (height - height / CARD_RATIO) / 4;

   const isHero = player === HERO;
   let dragOrDrop = useRef(null);
   if (isHero) {
      if (blank && !isDragging) dragOrDrop = drop;
      else {
         if (dndZones.includes(row)) drag(drop(dragOrDrop));
         else if (row !== EXTRA_DECK) dragOrDrop = drag;
      }
   } else {
      if (row === MONSTER && blank) dragOrDrop = drop;
   }

   const handleDelete = () => {
      dispatch(moveCard({ from: { player, row, zone }, to: { player, row: discardPile, zone: 0 } }));
   };

   if (isHero && selected) Mousetrap.bind("d", handleDelete);
   useEffect(() => {
      return function cleanup() {
         Mousetrap.unbind("d");
      };
   }, []);

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
            borderColor: (isOver && (canDrop ? OVER_COLOR : INVALID_COLOR)) || (selected && HERO_SELECTION_COLOR),
            backgroundImage:
               !blank && (facedown ? 'url("/sleeves/goat.png")' : 'url("/cards/bgs/' + cardType + '.jpg")')
         }}
         onClick={() => {
            if (!blank && !deckZone) {
               if (!selected) dispatch(newSelection(player, row, zone, name));
               else {
                  if (isHero) dispatch(switchPosition(row, zone));
                  dispatch(clearSelection());
               }
            }
         }}
         onMouseEnter={() => {
            if (!blank && !deckZone) dispatch(newHover(name));
         }}
      >
         {!blank && !facedown && (
            <CardArt
               name={name}
               nameHeight={nameHeight}
               cardTypeIcon={atk ? attribute : cardType}
               levelOrSubtype={levelOrSubtype}
               atk={atk}
               def={def}
            />
         )}
      </div>
   );
}

function isAcceptable(itemType, acceptables) {
   return acceptables.includes(itemType);
}

YugiohCard.propTypes = {
   height: PropTypes.number.isRequired,
   notFull: PropTypes.bool,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   zone: PropTypes.number,
   discardPile: PropTypes.string
};

YugiohCard.defaultProps = {
   zone: -1
};
