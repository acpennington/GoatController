import { SET_DECKLIST } from "utils/constants";

function setDecklist(decklist) {
   return { type: SET_DECKLIST, data: decklist };
}

export { setDecklist };
