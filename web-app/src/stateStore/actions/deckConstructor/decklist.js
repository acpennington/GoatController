import { SET_DECKLIST, TRANSFER_CARD } from "utils/constants";

function setDecklist(decklist) {
   return { type: SET_DECKLIST, data: decklist };
}

function transferCard(cardName, to, from) {
   return { type: TRANSFER_CARD, data: { to, from, cardName } };
}

export { setDecklist, transferCard };
