function addMessage(message) {
   return {
      type: "ADD_MESSAGE",
      data: message
   };
}

export { addMessage };
