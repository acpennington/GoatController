import { openModal } from "./settings.js";
import { moveCard, shuffleDeck } from "./field.js";

import getCardDetails from "utils/getCardDetails.js";
import getOtherPlayer from "utils/getOtherPlayer.js";
import { ST, DECK, GRAVEYARD, BANISHED, MILL, SEND_ENTIRE_GAMESTATE } from "utils/constants.js";

function filterDeck(player, params) {
   return openModal(player, DECK, params);
}

function millUntil(player, deck, params, socket = false) {
   if (socket && socket.api) {
      const payload = { action: MILL, data: { token: socket.token, id: socket.matchId, deck, params } };
      socket.api.send(JSON.stringify(payload));
   }

   return (dispatch) => {
      for (let i = deck.length - 1, stop = false; i >= 0 && !stop; i--) {
         const card = deck[i];
         const cardDetails = card && getCardDetails(card.name);

         if (params === ST) {
            if (isNaN(cardDetails.atk)) stop = true;
         }

         dispatch(moveCard({ from: { player, row: DECK, zone: i }, to: { player, row: GRAVEYARD, zone: 0 } }));
      }
   };
}

function banishAll(field, player, activeCard, socket = false) {
   const deck = field[player].deck;
   const otherPlayer = getOtherPlayer(player, field);
   const otherDeck = field[otherPlayer].deck;
   const activeCardName = activeCard.name;

   return (dispatch) => {
      console.log(JSON.stringify(activeCard));
      dispatch(moveCard({ from: activeCard, to: { player, row: BANISHED, zone: 0 }, noSound: true }));

      console.log(deck.length);
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
      console.log(otherDeck.length);
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

      // we need to figure out how to make sure that decks do not get desynched here
      dispatch(shuffleDeck(player));
      dispatch(shuffleDeck(otherPlayer, false, true));

      if (socket && socket.api)
         dispatch({
            type: SEND_ENTIRE_GAMESTATE,
            data: { socket, message: player + " resolved Nobleman. All copies of " + activeCardName + " were banished." }
         });
   };
}

export { filterDeck, millUntil, banishAll };
