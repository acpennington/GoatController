import React, { Component } from "react";
import { Provider } from "react-redux";

import ResizableContainer, { SizeContext } from "components/ResizableContainer/ResizableContainer.js";

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
            <Provider store={store}></Provider>
         </ResizableContainer>
      );
   }
}

export default DeckConstructor;
