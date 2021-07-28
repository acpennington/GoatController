import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import DecklistCard from "components/YugiohCard/DecklistCard.js";
import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import { transferCard } from "stateStore/actions/deckConstructor/decklist";
import getCardDetails from "utils/getCardDetails.js";

import { orderedCardTypes, SIDEDECK, OVER_COLOR, allLocations } from "utils/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";

function DeckPile({ classes, name, player, cardsMap, sliderValue }) {
   const dispatch = useDispatch();
   const { stackSameName, deckLoaded } = useSelector((state) => {
      return { stackSameName: state.settings.stackSameName, deckLoaded: state.settings.deckLoaded };
   });
   const size = useContext(SizeContext);
   const cardHeight = ((size / 6.5) * sliderValue) / 50;
   const cards = [];

   const cardKeys = Object.keys(cardsMap);
   cardKeys.sort((a, b) => {
      const deetsA = getCardDetails(a);
      const deetsB = getCardDetails(b);
      return orderedCardTypes.indexOf(deetsA.cardType) - orderedCardTypes.indexOf(deetsB.cardType);
   });
   let cardCount = 0;

   for (let i = 0; i < cardKeys.length; i++) {
      const cardName = cardKeys[i];
      const quantity = cardsMap[cardName];
      cardCount += quantity;

      if (stackSameName) cards.push(<DecklistCard height={cardHeight} player={player} location={name} name={cardName} quantity={quantity} zone={i} key={i} />);
      else
         for (let j = 0; j < quantity; j++)
            cards.push(<DecklistCard height={cardHeight} player={player} location={name} name={cardName} quantity={1} zone={i * 4 + j} key={i * 4 + j} />);
   }

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allLocations,
      canDrop: () => name !== SIDEDECK || cardCount < 15,
      drop: (item) => dispatch(transferCard(item.name, name, item.type)),
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: monitor.canDrop()
      })
   });

   return (
      <Fragment>
         <h4 className={classes.deckLabel}>
            {deckLoaded} — {capitalize(name)}: {cardCount}
         </h4>
         <div className={classes.listContainer} ref={drop} style={{ backgroundColor: isOver && canDrop && OVER_COLOR + "33" }}>
            {cards}
         </div>
      </Fragment>
   );
}

function capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

DeckPile.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   cardsMap: PropTypes.object.isRequired,
   sliderValue: PropTypes.number.isRequired
};

export default withStyles(styles)(DeckPile);
