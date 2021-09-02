const actionAndMessage = require("./utils/actionAndMessage.js");

async function sendReveal(id, username, hand, connectionId, api) {
   let content;
   if (hand) {
      content = hand.length ? `${username} revealed their hand: ${hand.map((name) => `<<${name}>>`).join(", ")}.` : `${username} revealed their empty hand.`;
   } else {
      content = `${username} stopped revealing their hand.`;
   }
   const message = { author: "Server", content };
   const action = { action: "REVEAL_HAND", data: username };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Hand reveal" };
}

module.exports = sendReveal;
