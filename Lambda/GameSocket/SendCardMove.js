const actionAndMessage = require("./utils/actionAndMessage.js");
const { HAND, DECK, GRAVEYARD, BANISHED, MONSTER, SPELL_TRAP, FIELD_SPELL } = require("./shared/constants");
const display = require("./shared/display");

const ZONES = [MONSTER, SPELL_TRAP, FIELD_SPELL];

// @action SendCardMove
// @desc Sends a card movement from one player to the other (and watchers)
// @access Private
// @db 1 read, 0 writes
async function sendCardMove(id, username, from, fromCard, to, settingTrap, msg, connectionId, api) {
   const player = to.player === username ? " their " : to.player + "'s ";
   const unknown =
      settingTrap || (from.row === DECK && to.row === HAND && from.zone === -1) || (fromCard.facedown && to.row !== GRAVEYARD && to.row !== BANISHED);
   const cardName = unknown ? "a card " : "<<" + fromCard.name + ">>";
   const adverb = ` ${msg} ` || " ";
   const noMessage = (from.row === HAND && to.row === HAND) || (from.row === DECK && to.row === DECK);

   const fromZone = ZONES.includes(from.row) ? `${display(from.row)} Zone` : display(from.row);
   const toZone = ZONES.includes(to.row) ? `${display(to.row)} Zone` : display(to.row);

   const message = !noMessage && {
      author: "Server",
      content: `${username}${adverb}moved ${cardName} from their ${fromZone} to ${player} ${toZone}.`
   };
   const action = { action: "MOVE_CARD", data: { from, to } };

   await actionAndMessage(id, action, message, connectionId, api);
   return { statusCode: 200, body: "Card moved" };
}

module.exports = sendCardMove;
