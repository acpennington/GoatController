const actionAndMessage = require("./utils/actionAndMessage.js");

// @action SendAttack
// @desc Sends an attack from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendAttack(id, username, toName, fromName, to, from, connectionId, api) {
   const attackTarget = toName !== "directly" && toName !== "a facedown Monster" ? "<<" + toName + ">>" : toName;
   const message = { author: "Server", content: `${username} attacked ${attackTarget} with <<${fromName}>>.` };
   const action = { action: "ATTACK", data: { to, from } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Attack declared" };
}

module.exports = sendAttack;
