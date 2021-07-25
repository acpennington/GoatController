import { SET_DECKLIST, TRANSFER_CARD } from "utils/constants";
import { setUnsaved } from "../shared/settings";

function setDecklist(decklist) {
   return { type: SET_DECKLIST, data: decklist };
}

function transferCard(cardName, to, from) {
   return (dispatch) => {
      dispatch({ type: TRANSFER_CARD, data: { to, from, cardName } });
      if (to !== from) dispatch(setUnsaved(true));
   };
}

export { setDecklist, transferCard };
