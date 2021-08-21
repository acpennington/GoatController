import { openModal } from "../shared/settings.js";
import { moveCard, shuffleDeck } from "./field.js";

import checkParams from "utils/checkParams.js";
import getOtherPlayer from "utils/getOtherPlayer.js";
import { DECK, GRAVEYARD, BANISHED, MILL, SEND_ENTIRE_GAMESTATE } from "shared/constants.js";

function filterDeck(player, script) {
   const { params, autoClose } = script;
   return openModal(player, DECK, params, autoClose);
}

function millUntil(player, deck, params, socket = false) {
   const topCard = deck.length - 1;
   return (dispatch) => {
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

      if (socket && socket.api) {
         const payload = { action: MILL, data: { token: socket.token, id: socket.matchId, deck, params, fail: found < 0 } };
         socket.api.send(JSON.stringify(payload));
      }
      if (found < 0) return;

      for (let i = topCard; i >= found; i--) {
         dispatch(moveCard({ from: { player, row: DECK, zone: i }, to: { player, row: GRAVEYARD, zone: 0 }, noSound: i !== topCard }));
      }
   };
}

function banishAll(field, player, activeCard, variant, socket = false) {
   const deck = field[player].deck;
   const otherPlayer = getOtherPlayer(player, field);
   const otherDeck = field[otherPlayer].deck;
   const activeCardName = activeCard.name;

   return (dispatch) => {
      dispatch(moveCard({ from: activeCard, to: { player, row: BANISHED, zone: 0 }, noSound: true }));

      for (let i = 0; i < deck.length; i++) {
         const card = deck[i];
         if (card && card.name === activeCardName) {
            dispatch(
               moveCard({
                  from: { player, row: DECK, zone: i },
                  to: { player, row: BANISHED, zone: 0 },
                  noSound: true
               })
            );
            i--;
         }
      }
      for (let i = 0; i < otherDeck.length; i++) {
         const card = otherDeck[i];
         if (card && card.name === activeCardName) {
            dispatch(
               moveCard({
                  from: { player: otherPlayer, row: DECK, zone: i },
                  to: { player: otherPlayer, row: BANISHED, zone: 0 },
                  noSound: true
               })
            );
            i--;
         }
      }

      dispatch(shuffleDeck(player));
      dispatch(shuffleDeck(otherPlayer, false, true));

      if (socket && socket.api)
         dispatch({
            type: SEND_ENTIRE_GAMESTATE,
            data: { socket, message: `${player} resolved <<${variant}>>. All copies of <<${activeCardName}>> were banished.` }
         });
   };
}

export { filterDeck, millUntil, banishAll };
