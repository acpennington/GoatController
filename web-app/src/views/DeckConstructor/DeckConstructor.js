import React, { Component } from "react";
import { connect } from "react-redux";

import ResizableContainer, { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import LeftPanel from "./LeftPanel.js";
import Decklist from "./Decklist.js";
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
            <LeftPanel name={this.username} />
            <Decklist width={decklistWidth} />
            {thereAreResults && <SearchResults results={searchResults} />}
         </ResizableContainer>
      );
   }
}

function mapStateToProps(state) {
   return { searchResults: state.searchResults };
}

export default connect(mapStateToProps)(DeckConstructor);
