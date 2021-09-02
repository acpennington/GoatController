module.exports = function cardCount(cardsMap) {
   let count = 0;

   Object.keys(cardsMap).forEach((cardName) => {
      count += cardsMap[cardName];
   });

   return count;
};
