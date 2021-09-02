const { cards, fusions } = require("./database");

module.exports = function exportYDK(main, side, extra = false) {
   const buf = ["#created by ..."];
   const add = (id, n) => {
      for (let i = 0; i < n; i++) buf.push(id);
   };
   buf.push("#main");
   for (const name in main) {
      add(cards[name].id, main[name]);
   }
   buf.push("#extra");
   // Some lesser simulators may error if the extra deck contains > 15 cards
   if (extra) {
      for (const name in fusions) {
         add(fusions[name].id, 3);
      }
   }
   buf.push("!side");
   for (const name in side) {
      add(cards[name].id, side[name]);
   }
   return buf.join("\n");
};
