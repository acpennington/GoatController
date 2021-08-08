import React, { Component } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import ResizableContainer from "components/ResizableContainer/ResizableContainer.js";
import LeftPanel from "./LeftPanel/LeftPanel.js";
import RightPanel from "./RightPanel/RightPanel.js";
import Decklist from "./Decklist/Decklist.js";

class DeckConstructor extends Component {
   constructor(props) {
      super(props);

      this.username = window.sessionStorage.getItem("username");
   }

   render() {
      return (
         <ResizableContainer>
            <DndProvider backend={HTML5Backend}>
               <LeftPanel player={this.username} />
               <Decklist player={this.username} />
               <RightPanel player={this.username} />
            </DndProvider>
         </ResizableContainer>
      );
   }
}

export default DeckConstructor;
