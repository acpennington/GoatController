import { NEW_RESULTS, RERENDER_SEARCH } from "utils/constants.js";

function newResults(data) {
   return { type: NEW_RESULTS, data };
}

function rerenderSearch() {
   return { type: RERENDER_SEARCH };
}

export { newResults, rerenderSearch };
