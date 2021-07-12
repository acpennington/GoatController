const actionAndMessage = require("./utils/actionAndMessage.js");

async function sendReveal(id, username, connectionId, api) {
   const message = { author: "Server", content: username + "revealed (or stopped revealing) their hand." };
   const action = { action: "REVEAL_HAND", data: username };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Hand reveal" };
}

module.exports = sendReveal;
