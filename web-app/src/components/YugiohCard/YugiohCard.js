import React, { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { bind, unbind } from "mousetrap";

import { WebSocketContext } from "views/Game/WebSocketContext.js";
import { getBools, rowClass, isAcceptable } from "./utils.js";
import getOtherPlayer from "utils/getOtherPlayer.js";
import getCardDetails from "utils/getCardDetails.js";
import CardArt from "./CardArt.js";
import ZoneLabel from "./ZoneLabel.js";
import { newHover } from "stateStore/actions/hoverCard.js";
import { newSelection, clearSelection } from "stateStore/actions/selectedCard.js";
import { moveCard, switchPosition, attack } from "stateStore/actions/field.js";
import { openModal } from "stateStore/actions/settings.js";
import {
   CARD_RATIO,
   FACEDOWN_CARD,
   MONSTER,
   ST,
   FIELD_SPELL,
   HAND,
   DECK,
   EXTRA_DECK,
   GRAVEYARD,
   BANISHED,
   dndZones,
   dynamicZones,
   OFF_FIELD,
   allTypes,
   OVER_COLOR,
   HERO_SELECTION_COLOR,
   REVEAL_COLOR,
   BATTLE
} from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
const useStyles = makeStyles(cardStyle);

function YugiohCard({ height, notFull, player, row, zone, discardPile, cardName, modal, isHero }) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const socket = useContext(WebSocketContext);
   const { discardZone, deckZone, isDeck, isExtraDeck, isDiscardZone, inHand, monsterZone, STzone, fieldZone } = getBools(row, zone);

   let { deckCount, card, sleeves, selected, handRevealed, battlePhase } = useSelector((state) => {
      const sfPlayer = state.field[player];
      const card = cardName ? { name: cardName } : zone === -1 ? sfPlayer[row] : sfPlayer[row][zone];
      const sleeves = isExtraDeck || (card && !card.notOwned) ? sfPlayer.sleeves : state.field[getOtherPlayer(player, state.field)].sleeves;
      const selection = state.selectedCard;
      const selected = selection && selection.player === player && selection.row === row && selection.zone === zone;
      const handRevealed = sfPlayer.handRevealed;
      const deckCount = row === DECK ? sfPlayer[DECK].length : 1;
      const battlePhase = state.turn.phase === BATTLE;
      return { deckCount, card, sleeves, selected, handRevealed, battlePhase };
   });

   if (isDiscardZone) {
      const cardLength = card ? card.length : 0;
      if (cardLength === 0) {
         zone = 0;
         card = false;
      } else {
         zone = cardLength - 1;
         card = card[zone];
      }
   }

   let name = card && card.name;
   const revealed = inHand && handRevealed;
   const facedown = name === FACEDOWN_CARD || deckZone || (card && card.facedown);
   if (facedown && !isHero) name = FACEDOWN_CARD;
   const inDef = card && card.inDef && monsterZone ? card.inDef : false;

   const { cardType, attribute, levelOrSubtype, atk, def } = getCardDetails(name);

   const type =
      dynamicZones.includes(row) && row !== DECK ? (levelOrSubtype === FIELD_SPELL && FIELD_SPELL) || OFF_FIELD + (!isNaN(levelOrSubtype) ? MONSTER : ST) : row;

   const [{ isDragging }, drag] = useDrag({
      item: { type, player, row, zone, cardName },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging()
      })
   });

   const blank = ((!card || isDragging) && !deckZone) || !deckCount;

   const acceptables =
      (!isHero && !blank && battlePhase && [MONSTER]) ||
      (fieldZone && FIELD_SPELL) ||
      (monsterZone && [MONSTER, ST, OFF_FIELD + MONSTER, EXTRA_DECK]) ||
      (STzone && [MONSTER, ST, OFF_FIELD + ST]) ||
      allTypes;

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allTypes,
      canDrop: (item) => isAcceptable(item.type, acceptables),
      drop: (item) => {
         if (battlePhase && item.row === MONSTER && monsterZone && !blank) dispatch(attack());
         else dispatch(moveCard({ from: item, to: { player, row, zone } }, socket));
      },
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: !!monitor.canDrop()
      })
   });

   let dragOrDrop = useRef(null);
   if (isHero) {
      if (blank && !isDragging) dragOrDrop = drop;
      else if (dndZones.includes(row)) drag(drop(dragOrDrop));
      else if (!isExtraDeck) dragOrDrop = drag;
   } else if (row === MONSTER && (blank || battlePhase)) dragOrDrop = drop;

   if (isHero && selected)
      bind("d", () => {
         dispatch(moveCard({ from: { player, row, zone }, to: { player, row: discardPile, zone: 0 } }, socket));
      });
   useEffect(() => {
      return function cleanup() {
         unbind("d");
      };
   }, []);

   const margin = !notFull && (height - height / CARD_RATIO) / 2 + 2;
   const villExtension = isHero || modal ? "" : "Villain";
   return (
      <div
         ref={dragOrDrop}
         className={classes["container" + (inDef ? "Def" : villExtension + (facedown && (STzone || fieldZone) ? "" : rowClass(row)))]}
         style={{
            width: Math.floor(height / CARD_RATIO),
            height,
            marginLeft: margin,
            marginRight: margin,
            opacity: (isDragging || blank) && !monsterZone && !STzone && !fieldZone && !isDiscardZone && !isDeck && 0,
            borderWidth: (blank || facedown || deckZone || isOver || selected || revealed || (!isHero && inHand)) && "3px",
            borderColor: (isOver && canDrop && OVER_COLOR) || (selected && HERO_SELECTION_COLOR) || (revealed && REVEAL_COLOR),
            backgroundImage: !blank && (facedown ? 'url("/sleeves/' + sleeves + '")' : 'url("/cards/bgs/' + cardType + '.jpg")')
         }}
         onClick={() => {
            if (!blank && !deckZone && !isDiscardZone) {
               if (!selected) dispatch(newSelection(player, row, zone, name));
               else {
                  if (isHero) {
                     if (discardZone) {
                        const oppositeDiscard = row === GRAVEYARD ? BANISHED : GRAVEYARD;
                        dispatch(moveCard({ from: { player, row, zone }, to: { player, row: oppositeDiscard, zone: 0 } }, socket));
                     } else if (row === DECK) dispatch(moveCard({ from: { player, row, zone }, to: { player, row: HAND } }, socket));
                     else dispatch(switchPosition(player, row, zone, socket));
                  }
                  dispatch(clearSelection());
               }
            } else if (!blank && (discardZone || (isExtraDeck && isHero))) dispatch(openModal(player, row));
         }}
         onMouseEnter={() => {
            if (!blank && !deckZone) dispatch(newHover(player, row, zone, name));
         }}
      >
         {!blank && !facedown && (
            <CardArt
               name={name}
               nameHeight={Math.floor((height - height / CARD_RATIO) / 4 - 1)}
               cardTypeIcon={attribute || cardType}
               levelOrSubtype={levelOrSubtype}
               atk={atk}
               def={def}
               villExtension={villExtension}
            />
         )}
         <ZoneLabel
            height={height}
            player={player}
            row={row}
            isDeck={isDeck}
            isExtraDeck={isExtraDeck}
            isDiscardZone={isDiscardZone}
            cardName={cardName}
            villExtension={villExtension}
         />
      </div>
   );
}

YugiohCard.propTypes = {
   height: PropTypes.number.isRequired,
   notFull: PropTypes.bool,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   zone: PropTypes.number,
   discardPile: PropTypes.string,
   cardName: PropTypes.string,
   modal: PropTypes.bool,
   isHero: PropTypes.bool
};

YugiohCard.defaultProps = {
   zone: -1
};

export default YugiohCard;
