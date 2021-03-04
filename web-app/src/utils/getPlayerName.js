import { HERO, VILLAIN } from "./constants.js";

export default function getPlayerName(player) {
   if (player === HERO) return "ACP";
   else if (player === VILLAIN) return "badguy69";
   else return "unknown player";
}
