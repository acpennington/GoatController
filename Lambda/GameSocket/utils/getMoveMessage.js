const display = require("../shared/display");
const { HAND, DECK, GRAVEYARD, BANISHED, MONSTER, SPELL_TRAP, FIELD_SPELL, BOTTOM } = require("../shared/constants");

const ZONES = [MONSTER, SPELL_TRAP, FIELD_SPELL];

function getMoveMessage(username, from, to, settingTrap = false, msg = false) {
   const player = to.player === username ? "their" : `${to.player}'s`;
   const unknown = settingTrap || (from.facedown && to.row !== GRAVEYARD && to.row !== BANISHED) || (from.row === HAND && to.row === DECK);
   const cardName = unknown ? "a card" : "<<" + from.cardName + ">>";
   const adverb = msg ? ` ${msg} ` : " ";
   const noMessage = from.row === HAND && to.row === HAND;

   const fromZone = ZONES.includes(from.row) ? `${display(from.row)} Zone` : display(from.row);
   const toZone = (ZONES.includes(to.row) ? `${display(to.row)} Zone` : display(to.row)) + (to.row === DECK && to.zone === BOTTOM ? " (bottom)" : "");

   return !noMessage && `${username}${adverb}moved ${cardName} from their ${fromZone} to ${player} ${toZone}.`;
}

module.exports = getMoveMessage;
