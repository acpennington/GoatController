import { HERO, VILLAIN } from "./constants.js";

export default function getPlayerName(player) {
   if (player === HERO) return "ACP";
   else if (player === VILLAIN) return "Evil";
   else return "unknown player";
}
