import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";
import getCardDetails from "utils/getCardDetails.js";

function RenderCards({ classes, cardsLen, height, player, row, cardNames, sub, filter }) {
   const cardDivs = [];

   let zoneNumbers = [];
   for (let i = 0; i < cardsLen; i++) zoneNumbers.push(i);

   const cards = useSelector((state) => (filter ? state.field[player][row] : false));
   if (filter)
      zoneNumbers = zoneNumbers.filter((numb) => {
         const cardName = cards[numb].name;
         const cardDetails = getCardDetails(cardName);
         const filters = filter.split(",");

         for (const singleFilter of filters) {
            const operator = singleFilter.includes(">") ? ">" : singleFilter.includes("<") ? "<" : "=";
            const [deet, comparator] = singleFilter.split(operator);
            switch (operator) {
               case ">":
                  if (!(cardDetails[deet] && cardDetails[deet] >= comparator)) return false;
                  break;
               case "<":
                  if (!(cardDetails[deet] && cardDetails[deet] <= comparator)) return false;
                  break;
               default:
                  if (!(cardDetails[deet] && cardDetails[deet] === comparator)) return false;
            }
         }
         return true;
      });

   for (let i = zoneNumbers.length - 1; i >= 0; i -= 2) {
      cardDivs.push(
         <div className={classes.cards} key={i}>
            <YugiohCard
               height={height}
               player={player}
               row={row}
               zone={zoneNumbers[i]}
               cardName={cardNames ? cardNames[i] : null}
               notFull
               modal
            />
            {i !== 0 && (
               <YugiohCard
                  height={height}
                  player={player}
                  row={row}
                  zone={zoneNumbers[i - 1]}
                  cardName={cardNames ? cardNames[zoneNumbers[i - 1]] : null}
                  notFull
                  modal
               />
            )}
         </div>
      );
   }

   return (
      <FriendlyScroll
         id={"modal" + player + row}
         style={{ flexDirection: "column", overflowY: cardsLen > 12 ? "auto" : "hidden" }}
         contStyle={{ height: "calc(100% - " + sub + "px)" }}
      >
         {cardDivs}
      </FriendlyScroll>
   );
}

RenderCards.propTypes = {
   classes: PropTypes.object.isRequired,
   cardsLen: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   sub: PropTypes.number.isRequired,
   filter: PropTypes.string
};

export default RenderCards;
