export default function getOtherPlayer(player, field) {
   for (const key in field) if (key !== player) return key;
}
