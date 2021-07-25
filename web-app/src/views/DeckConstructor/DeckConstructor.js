import React, { Component } from "react";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import ResizableContainer from "components/ResizableContainer/ResizableContainer.js";
import LeftPanel from "./LeftPanel/LeftPanel.js";
import Decklist from "./Decklist/Decklist.js";
import SearchResults from "./SearchResults.js";

import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";

class DeckConstructor extends Component {
   constructor(props) {
      super(props);
      checkToken();
      setBodyImage();

      this.username = window.sessionStorage.getItem("username");
   }

   render() {
      const { searchResults } = this.props;
      const thereAreResults = searchResults.length > 0;
      const decklistWidth = (thereAreResults ? 100 - 23 - 12 : 100 - 23) + "%";

      return (
         <ResizableContainer>
            <DndProvider backend={HTML5Backend}>
               <LeftPanel name={this.username} />
               <Decklist width={decklistWidth} player={this.username} />
               {thereAreResults && <SearchResults results={searchResults} />}
            </DndProvider>
         </ResizableContainer>
      );
   }
}

function mapStateToProps(state) {
   return { searchResults: state.searchResults };
}

export default connect(mapStateToProps)(DeckConstructor);
