import React, { Component } from "react";
import { Provider } from "react-redux";

import ResizableContainer, { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import LeftPanel from "./LeftPanel.js";
import Decklist from "./Decklist.js";
import SearchResults from "./SearchResults.js";

import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";
import store from "stateStore/deckConstructorStore.js";

class DeckConstructor extends Component {
   constructor(props) {
      super(props);
      checkToken(true);
      setBodyImage();
   }

   render() {
      return (
         <ResizableContainer>
            <Provider store={store}>
               <LeftPanel />
               <Decklist />
               <SearchResults />
            </Provider>
         </ResizableContainer>
      );
   }
}

export default DeckConstructor;
