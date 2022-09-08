import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import RenderCards from "components/RenderCards/RenderCards.js";
import { transferCard } from "stateStore/actions/deckConstructor/decklist";
import getCardDetails from "shared/getCardDetails.js";
import { orderedCardTypes, SIDEDECK, OVER_COLOR, allLocations } from "shared/constants.js";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";

function DeckPile({ classes, name, player, cardCount, noDrop }) {
   const dispatch = useDispatch();
   const { stackSameName, cardSize, cardsMap } = useSelector((state) => {
      return { stackSameName: state.settings.stackSameName, cardSize: state.settings.cardSize, cardsMap: state.decklist[name] };
   });
   const size = useContext(SizeContext);
   const cardHeight = ((size / 6.5) * cardSize) / 50;
   const cards = [];

   const cardKeys = Object.keys(cardsMap);
   cardKeys.sort((a, b) => {
      const deetsA = getCardDetails(a);
      const deetsB = getCardDetails(b);
      return orderedCardTypes.indexOf(deetsA.cardType) - orderedCardTypes.indexOf(deetsB.cardType);
   });

   for (let i = 0; i < cardKeys.length; i++) {
      const cardName = cardKeys[i];
      const quantity = cardsMap[cardName];

      if (stackSameName) cards.push({ name: cardName, quantity });
      else for (let j = 0; j < quantity; j++) cards.push({ name: cardName, quantity: 1 });
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
      <div className={classes.listContainer} ref={noDrop ? null : drop} style={{ backgroundColor: isOver && canDrop && OVER_COLOR + "33" }}>
         <RenderCards cardsToRender={cards} maxHeight={0} cardHeight={cardHeight} player={player} decklist={name} />
      </div>
   );
}

DeckPile.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   cardCount: PropTypes.number,
   noDrop: PropTypes.bool
};

export default withStyles(styles)(DeckPile);
