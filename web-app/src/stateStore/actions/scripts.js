import { openModal } from "./settings.js";
import { moveCard } from "./field.js";

import { ST, DECK, GRAVEYARD, MILL } from "utils/constants.js";
import getCardDetails from "utils/getCardDetails.js";

function filterDeck(player, params) {
   return openModal(player, DECK, params);
}

function millUntil(player, deck, params, socket) {
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

export { filterDeck, millUntil };
