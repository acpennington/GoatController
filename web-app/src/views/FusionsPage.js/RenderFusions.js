import React, { Component } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import RenderCards from "components/RenderCards/RenderCards.js";
import { fusions } from "databases/cardDB";

import { HERO } from "utils/constants.js";

class RenderFusions extends Component {
   shouldComponentUpdate() {
      return false;
   }

   render() {
      const cardsToRender = [];
      Object.keys(fusions).forEach((cardName) => cardsToRender.push({ name: cardName, quantity: 1 }));

      return (
         <DndProvider backend={HTML5Backend}>
            <RenderCards cardHeight={this.context / 5.65} cardsToRender={cardsToRender} player={HERO} decklist />
         </DndProvider>
      );
   }
}

RenderFusions.contextType = SizeContext;

export default RenderFusions;
