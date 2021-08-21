const actionAndMessage = require("./utils/actionAndMessage.js");
const { MONSTER, HAND } = require("./shared/constants");

async function sendPosChange(id, username, row, zone, cardName, connectionId, api) {
   const handFlip = row === HAND;
   const switchType = row === MONSTER ? "switched the battle position of" : "flipped";

   const message = !handFlip && { author: "Server", content: `${username} ${switchType} <<${cardName}>>.` };
   const action = { action: "SWITCH_POSITION", data: { player: username, row, zone } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Position changed" };
}

module.exports = sendPosChange;
