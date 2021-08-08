import cardCount from "./cardCount.js";

export default function isMainLegal() {
   const storage = window.sessionStorage;
   const activeDeck = storage.getItem("activeDeck");
   const decks = JSON.parse(storage.getItem("decks"));
   const mainCount = cardCount(decks[activeDeck].maindeck);

   return mainCount >= 40;
}
