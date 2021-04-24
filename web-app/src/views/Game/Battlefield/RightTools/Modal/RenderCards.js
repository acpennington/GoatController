import React from "react";
import PropTypes from "prop-types";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";

function RenderCards({ classes, cardsLen, height, player, row, cardNames, sub }) {
   const cardDivs = [];

   for (let i = cardsLen - 1; i >= 0; i -= 2) {
      cardDivs.push(
         <div className={classes.cards} key={i}>
            <YugiohCard
               height={height}
               player={player}
               row={row}
               zone={i}
               cardName={cardNames ? cardNames[i] : null}
               notFull
               modal
            />
            {i !== 0 && (
               <YugiohCard
                  height={height}
                  player={player}
                  row={row}
                  zone={i - 1}
                  cardName={cardNames ? cardNames[i - 1] : null}
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
   sub: PropTypes.number.isRequired
};

export default RenderCards;
