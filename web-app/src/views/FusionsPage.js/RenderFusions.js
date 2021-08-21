import React, { Component } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import RenderCards from "components/RenderCards/RenderCards.js";
import { fusions } from "shared/database";

import { HERO } from "shared/constants.js";

class RenderFusions extends Component {
   shouldComponentUpdate() {
      return false;
   }

   render() {
      const cardsToRender = [];
      Object.keys(fusions).forEach((cardName) => cardsToRender.unshift({ name: cardName, quantity: 1 }));
      const cardHeight = this.context / 5.65; // this is a magic number to make the fusions all display nicely

      return (
         <DndProvider backend={HTML5Backend}>
            <RenderCards cardHeight={cardHeight} cardsToRender={cardsToRender} player={HERO} decklist />
         </DndProvider>
      );
   }
}

RenderFusions.contextType = SizeContext;

export default RenderFusions;
