import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import DecklistCard from "components/YugiohCard/DecklistCard.js";
import getCardDetails from "utils/getCardDetails.js";
import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";

import { EFFECT_MONSTER, SPELL, TRAP, SIDEDECK, OVER_COLOR, allLocations } from "utils/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";

function DeckPile({ classes, name, player, cardsMap, sliderValue }) {
   const stackSameName = useSelector((state) => state.settings.stackSameName);
   const size = useContext(SizeContext);
   const cardHeight = ((size / 6.5) * sliderValue) / 50;
   const cards = [];

   const cardKeys = Object.keys(cardsMap);
   cardKeys.sort((a, b) => typeToNumber(getCardDetails(b).cardType) - typeToNumber(getCardDetails(a).cardType));
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
      canDrop: (item) => name !== SIDEDECK || cardCount < 15,
      drop: (item) => {},
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: monitor.canDrop()
      })
   });

   return (
      <Fragment>
         <h4 className={classes.deckLabel}>
            {name}: {cardCount}
         </h4>
         <div className={classes.listContainer} ref={drop} style={{ backgroundColor: isOver && canDrop && OVER_COLOR + "33" }}>
            {cards}
         </div>
      </Fragment>
   );
}

function typeToNumber(type) {
   switch (type) {
      case EFFECT_MONSTER:
         return 3;
      case SPELL:
         return 2;
      case TRAP:
         return 1;
      default:
         return 0;
   }
}

function mapStateToProps(state) {
   return { stackSameName: state.settings.stackSameName };
}

DeckPile.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   cardsMap: PropTypes.object.isRequired,
   sliderValue: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(DeckPile));
