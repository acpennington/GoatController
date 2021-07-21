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
import { openModal, closeModal } from "stateStore/actions/settings.js";
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
   VILLAIN_SELECTION_COLOR,
   REVEAL_COLOR,
   BATTLE
} from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
const useStyles = makeStyles(cardStyle);

function YugiohCard({ height, notFull, player, row, zone, cardName, modal, isHero, style }) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const socket = useContext(WebSocketContext);
   const { discardZone, deckZone, isDeck, isExtraDeck, isDiscardZone, inHand, monsterZone, STzone, fieldZone } = getBools(row, zone);

   let { deckCount, card, counters, sleeves, selected, heroPlayer, heroSelected, villSelected, handRevealed, inBattlePhase } = useSelector((state) => {
      const sfPlayer = state.field[player];
      const card = cardName ? { name: cardName } : zone === -1 ? sfPlayer[row] : sfPlayer[row][zone];
      const counters = (card && card.counters) || 0;
      const otherPlayer = getOtherPlayer(player, state.field);
      const sleeves = isExtraDeck || (card && !card.notOwned) ? sfPlayer.sleeves : state.field[otherPlayer].sleeves;
      const selections = state.selectedCard;
      const heroPlayer = isHero ? player : otherPlayer;
      const villPlayer = isHero ? otherPlayer : player;
      const heroSelection = selections && selections[heroPlayer];
      const villSelection = selections && selections[villPlayer];
      const heroSelected = heroSelection && heroSelection.player === player && heroSelection.row === row && heroSelection.zone === zone;
      const villSelected = villSelection && villSelection.player === player && villSelection.row === row && villSelection.zone === zone;
      const handRevealed = sfPlayer.handRevealed;
      const deckCount = row === DECK ? sfPlayer[DECK].length : 1;
      const inBattlePhase = state.turn.phase === BATTLE;
      return { deckCount, card, counters, sleeves, selected, heroPlayer, heroSelected, villSelected, handRevealed, inBattlePhase };
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
      (!isHero && !blank && inBattlePhase && [MONSTER]) ||
      (fieldZone && FIELD_SPELL) ||
      (monsterZone && [MONSTER, ST, OFF_FIELD + MONSTER, EXTRA_DECK]) ||
      (STzone && [MONSTER, ST, OFF_FIELD + ST]) ||
      allTypes;

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allTypes,
      canDrop: (item) => isAcceptable(item.type, acceptables) && !(item.row === DECK && isDeck),
      drop: (item) => {
         if (inBattlePhase && item.row === MONSTER && monsterZone && !blank) dispatch(attack({ from: item, to: { player, row, zone }, socket }));
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
   } else if (row === MONSTER && (blank || inBattlePhase)) dragOrDrop = drop;

   if (isHero && heroSelected) {
      bind("d", () => {
         dispatch(moveCard({ from: { player, row, zone }, to: { player, row: GRAVEYARD, zone: 0 } }, socket));
      });
      bind("b", () => {
         dispatch(moveCard({ from: { player, row, zone }, to: { player, row: BANISHED, zone: 0 } }, socket));
      });
   }
   useEffect(() => {
      return function cleanup() {
         unbind("d");
         unbind("b");
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
            borderWidth: (blank || facedown || deckZone || isOver || heroSelected || villSelected || revealed || (!isHero && inHand)) && "3px",
            borderColor:
               (isOver && canDrop && OVER_COLOR) ||
               (heroSelected && HERO_SELECTION_COLOR) ||
               (villSelected && VILLAIN_SELECTION_COLOR) ||
               (revealed && REVEAL_COLOR),
            backgroundImage: !blank && (facedown ? 'url("/sleeves/' + sleeves + '")' : 'url("/cards/bgs/' + cardType + '.jpg")'),
            ...style
         }}
         onClick={() => {
            if (!blank && !deckZone && !isDiscardZone) {
               if (!heroSelected) dispatch(newSelection(heroPlayer, player, row, zone, name, socket));
               else {
                  if (isHero) {
                     if (discardZone) {
                        const oppositeDiscard = row === GRAVEYARD ? BANISHED : GRAVEYARD;
                        dispatch(moveCard({ from: { player, row, zone }, to: { player, row: oppositeDiscard, zone: 0 } }, socket));
                     } else if (row === DECK) dispatch(moveCard({ from: { player, row, zone }, to: { player, row: HAND } }, socket));
                     else dispatch(switchPosition(player, row, zone, socket));
                  }
                  dispatch(clearSelection(heroPlayer, socket));
               }
            } else if (!blank && (discardZone || (isExtraDeck && isHero))) dispatch(openModal(player, row));
            else if (isHero && deckZone) dispatch(closeModal(row, player, socket));
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
               battle={card.battle}
            />
         )}
         {!blank && card && card.battle && facedown && (
            <div>
               <img src={"/battle/" + card.battle + ".png"} className={classes.battleImg} alt={card.battle} style={{ marginTop: "20%" }} />
            </div>
         )}
         <ZoneLabel
            height={height}
            player={player}
            row={row}
            counters={isDragging ? 0 : counters}
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
   cardName: PropTypes.string,
   modal: PropTypes.bool,
   isHero: PropTypes.bool,
   style: PropTypes.object,
};

YugiohCard.defaultProps = {
   zone: -1
};

export default YugiohCard;
