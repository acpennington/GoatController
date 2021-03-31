import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { bind, unbind } from "mousetrap";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

import getCardDetails from "utils/getCardDetails.js";
import CardArt from "./CardArt.js";
import { newHover } from "stateStore/actions/hoverCard.js";
import { newSelection, clearSelection } from "stateStore/actions/selectedCard.js";
import { moveCard, switchPosition } from "stateStore/actions/field.js";
import { openModal } from "stateStore/actions/settings.js";
import {
   CARD_RATIO,
   HERO,
   VILLAIN,
   FACEDOWN_CARD,
   MONSTER,
   ST,
   FIELD_SPELL,
   HAND,
   DECK,
   EXTRA_DECK,
   GRAVEYARD,
   BANISHED,
   deckZones,
   discardZones,
   dndZones,
   dynamicZones,
   OFF_FIELD,
   allTypes,
   OVER_COLOR,
   HERO_SELECTION_COLOR,
   REVEAL_COLOR
} from "utils/constants.js";

const useStyles = makeStyles(cardStyle);

function YugiohCard({ height, notFull, player, row, zone, discardPile, cardName }) {
   const classes = useStyles();
   const dispatch = useDispatch();

   const discardZone = discardZones.includes(row);
   const deckZone = deckZones.includes(row) && zone === -1;
   const isExtraDeck = row === EXTRA_DECK && zone === -1;
   const inHand = row === HAND;

   let { zoneLabel, card, sleeves, selected, handRevealed } = useSelector((state) => {
      const card = cardName
         ? { name: cardName }
         : zone === -1
         ? state.field[player][row]
         : state.field[player][row][zone];
      const sleeves =
         (isExtraDeck && state.field[player].sleeves) ||
         (card && (card.notOwned ? state.field[isHero ? VILLAIN : HERO].sleeves : state.field[player].sleeves));
      const selection = state.selectedCard;
      const selected = selection && selection.player === player && selection.row === row && selection.zone === zone;
      const handRevealed = state.field[player].handRevealed;
      const zoneLabel =
         (row === DECK && state.field[player][DECK].count) ||
         (isExtraDeck && EXTRA_DECK) ||
         (row === EXTRA_DECK && 3 - (state.field[player].usedFusions[cardName] || 0)) ||
         (discardZone && zone === -1 && state.field[player][row].length);
      return { zoneLabel, card, sleeves, selected, handRevealed };
   });

   let dontSelect = false;
   if (discardZone && zone === -1) {
      dontSelect = true;
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
   const revealed = inHand && handRevealed;
   const isHero = player === HERO;
   const facedown = name === FACEDOWN_CARD || deckZone || (card && card.facedown);
   const inDef = card && card.inDef && row === MONSTER ? card.inDef : false;
   const { cardType, attribute, levelOrSubtype, atk, def } = getCardDetails(name);

   const type =
      (dynamicZones.includes(row) &&
         ((levelOrSubtype === FIELD_SPELL && FIELD_SPELL) || OFF_FIELD + (!isNaN(levelOrSubtype) ? MONSTER : ST))) ||
      row;

   const [{ isDragging }, drag] = useDrag({
      item: { type, player, row, zone, cardName },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging()
      })
   });

   const acceptables =
      (row === FIELD_SPELL && FIELD_SPELL) ||
      (row === MONSTER && [MONSTER, ST, OFF_FIELD + MONSTER, EXTRA_DECK]) ||
      (row === ST && [MONSTER, ST, OFF_FIELD + ST]) ||
      allTypes;

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

   const blank = ((!card || isDragging) && !deckZone) || (deckZone && !zoneLabel);

   let dragOrDrop = useRef(null);
   if (isHero) {
      if (blank && !isDragging) dragOrDrop = drop;
      else if (dndZones.includes(row)) drag(drop(dragOrDrop));
      else if (!isExtraDeck) dragOrDrop = drag;
   } else if (row === MONSTER && blank) dragOrDrop = drop;

   if (isHero && selected)
      bind("d", () => {
         dispatch(moveCard({ from: { player, row, zone }, to: { player, row: discardPile, zone: 0 } }));
      });
   useEffect(() => {
      return function cleanup() {
         unbind("d");
      };
   }, []);

   const margin = !notFull && (height - height / CARD_RATIO) / 2 + 1;
   return (
      <div
         ref={dragOrDrop}
         className={classes["container" + (inDef ? "Def" : (isHero ? "" : "Villain") + rowClass(row))]}
         style={{
            width: Math.floor(height / CARD_RATIO),
            height,
            marginLeft: margin,
            marginRight: margin,
            opacity: (isDragging || blank) && inHand && 0,
            borderWidth:
               (blank || facedown || deckZone || isOver || selected || revealed || (!isHero && inHand)) && "3px",
            borderColor:
               (isOver && canDrop && OVER_COLOR) || (selected && HERO_SELECTION_COLOR) || (revealed && REVEAL_COLOR),
            backgroundImage:
               !blank && (facedown ? 'url("/sleeves/' + sleeves + '")' : 'url("/cards/bgs/' + cardType + '.jpg")')
         }}
         onClick={() => {
            if (!blank && !deckZone && !dontSelect) {
               if (!selected) dispatch(newSelection(player, row, zone, name));
               else {
                  if (isHero) {
                     if (discardZone) {
                        const oppositeDiscard = row === GRAVEYARD ? BANISHED : GRAVEYARD;
                        dispatch(
                           moveCard({ from: { player, row, zone }, to: { player, row: oppositeDiscard, zone: 0 } })
                        );
                     } else dispatch(switchPosition(row, zone));
                  }
                  dispatch(clearSelection());
               }
            } else if (!blank && (discardZone || (isExtraDeck && isHero))) dispatch(openModal({ player, row }));
         }}
         onMouseEnter={() => {
            if (!blank && !deckZone) dispatch(newHover(name));
         }}
      >
         {!blank && !facedown && (
            <CardArt
               name={name}
               nameHeight={(height - height / CARD_RATIO) / 4 - 0.5}
               cardTypeIcon={attribute || cardType}
               levelOrSubtype={levelOrSubtype}
               atk={atk}
               def={def}
               isHero={isHero}
               inDef={inDef}
            />
         )}
         {zoneLabel !== 0 && (
            <div
               className={classes["zoneLabel" + (isHero ? "" : "Villain")]}
               style={{ fontSize: height / 5 + "px", lineHeight: height / 5 + "px" }}
            >
               {zoneLabel}
            </div>
         )}
      </div>
   );
}

function rowClass(row) {
   switch (row) {
      case HAND:
         return "Hand";
      case MONSTER:
         return "Mon";
      case ST:
         return "ST";
      case FIELD_SPELL:
         return "Field";
      default:
         return "";
   }
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
   discardPile: PropTypes.string,
   cardName: PropTypes.string
};

YugiohCard.defaultProps = {
   zone: -1
};

export default YugiohCard;
