import { openModal } from "../shared/settings.js";
import { moveCard, shuffleDeck } from "./field.js";

import checkParams from "shared/checkParams.js";
import getOtherPlayer from "utils/getOtherPlayer.js";
import getCardDetails from "shared/getCardDetails.js";
import { DECK, HAND, GRAVEYARD, BANISHED, MILL, SEND_ENTIRE_GAMESTATE, FUSION_MONSTER, EXTRA_DECK } from "shared/constants.js";

function filterDeck(player, script, source, socket = false) {
   const { params, autoClose, oneParam } = script;
   return openModal(player, DECK, player, socket, params, autoClose, oneParam, source);
}

function millUntil(player, row, params, socketOrDeck) {
   return (dispatch) => {
      if (socketOrDeck && socketOrDeck.api) {
         const socket = socketOrDeck;
         const payload = { action: MILL, data: { token: socket.token, id: socket.matchId, row, params } };
         socket.api.send(JSON.stringify(payload));
      } else {
         const deck = socketOrDeck;
         const topCard = deck.length - 1;
         let found = -1;

         if (typeof params === "number") {
            found = Math.max(0, deck.length - params);
         } else {
            for (let i = topCard; i >= 0 && found < 0; i--) {
               const card = deck[i];
               const { fail } = checkParams(card, params);
               if (fail.length === 0) found = i;
            }
         }

         if (found >= 0)
            for (let i = topCard; i >= found; i--) {
               dispatch(moveCard({ from: { player, row: DECK, zone: i }, to: { player, row: GRAVEYARD, zone: 0 }, noSound: i !== topCard }));
            }
      }
   };
}

function banishAll(field, heroPlayer, activeCard, variant, chain, socket = false) {
   return (dispatch) => {
      if (socket && socket.api) {
         dispatch({
            type: SEND_ENTIRE_GAMESTATE,
            data: { socket, message: `${heroPlayer} resolved <<${variant}>>. All copies of <<${activeCard.name}>> were banished.` }
         });
      } else {
         if (chain) {
            dispatch(moveCard({ from: activeCard, to: { player: activeCard.player, row: BANISHED, zone: 0 }, noSound: true }));
            banish(dispatch, activeCard, field, activeCard.player, HAND);
            if (getCardDetails(activeCard.name).cardType === FUSION_MONSTER) {
               // NOTE: moving the card updates usedFusions for us
               while (field[activeCard.player].usedFusions[activeCard.name] < 3) {
                  dispatch(
                     moveCard({
                        from: { player: activeCard.player, type: EXTRA_DECK, row: EXTRA_DECK, zone: 0, cardName: activeCard.name },
                        to: { player: activeCard.player, row: BANISHED, zone: 0 },
                        noSound: true
                     })
                  );
               }
            }
            banish(dispatch, activeCard, field, activeCard.player, DECK);
            dispatch(shuffleDeck(activeCard.player, false, !chain));
         } else {
            const otherPlayer = getOtherPlayer(heroPlayer, field);
            dispatch(moveCard({ from: activeCard, to: { player: heroPlayer, row: BANISHED, zone: 0 }, noSound: true }));
            banish(dispatch, activeCard, field, heroPlayer, DECK);
            banish(dispatch, activeCard, field, otherPlayer, DECK);
            dispatch(shuffleDeck(heroPlayer));
            dispatch(shuffleDeck(otherPlayer, false, true));
         }
      }
   };
}

function banish(dispatch, activeCard, field, player, row) {
   for (let i = 0; i < field[player][row].length; i++) {
      const card = field[player][row][i];
      if (card && card.name === activeCard.name) {
         dispatch(
            moveCard({
               from: { player, row, zone: i },
               to: { player, row: BANISHED, zone: 0 },
               noSound: true
            })
         );
         i--;
      }
   }
}

export { filterDeck, millUntil, banishAll };
