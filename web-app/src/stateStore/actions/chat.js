import { ADD_MESSAGE } from "utils/constants";

function addMessage(author, content) {
   return {
      type: ADD_MESSAGE,
      data: { author, content }
   };
}

export { addMessage };
