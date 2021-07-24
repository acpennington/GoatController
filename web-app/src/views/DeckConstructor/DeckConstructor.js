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
      checkToken(true);
      setBodyImage();

      this.username = window.sessionStorage.getItem("username");
   }

   render() {
      return (
         <ResizableContainer>
            <LeftPanel name={this.username} />
            <Decklist />
            <SearchResults />
         </ResizableContainer>
      );
   }
}

function mapStateToProps(state) {
   return { searchResults: state.searchResults };
}

export default connect(mapStateToProps)(DeckConstructor);
