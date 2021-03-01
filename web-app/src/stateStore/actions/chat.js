import { ADD_MESSAGE } from "utils/constants";

function addMessage(message) {
   return {
      type: ADD_MESSAGE,
      data: message
   };
}

export { addMessage };
