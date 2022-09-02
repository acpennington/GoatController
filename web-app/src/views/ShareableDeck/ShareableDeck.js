import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import ResizableContainer from "components/ResizableContainer/ResizableContainer.js";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner.js";
import LeftPanel from "views/DeckConstructor/LeftPanel/LeftPanel.js";
import RightPanel from "views/DeckConstructor/RightPanel/DeckSettings/DeckSettings";
import Decklist from "views/DeckConstructor/Decklist/Decklist.js";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";
import { loadDeck } from "stateStore/actions/shared/settings.js";

import apiErrors from "utils/apiErrors.js";
import getQueryParams from "utils/getQueryParams.js";
import getApiStage from "utils/getApiStage.js";
import { API_URL, headers } from "shared/constants.js";

class ShareableDeck extends PureComponent {
   constructor(props) {
      super(props);

      const { user, name } = getQueryParams();
      this.username = user;
      this.deckName = name;

      this.state = { loading: true, message: "Loading Deck..." };
   }

   async componentDidMount() {
      const config = { headers };

      const res = await axios.get(API_URL + getApiStage() + "/users/deck?username=" + this.username + "&deckName=" + this.deckName, config);
      if (res.data.statusCode === 200) {
         const { setDecklist, loadDeck } = this.props;
         const deck = res.data.body.deck;
         loadDeck(this.deckName);
         setDecklist(deck);
         this.setState({ loading: false });
      } else this.setState({ message: apiErrors(res.data.body.errors) });
   }

   render() {
      const { loading, message } = this.state;

      if (loading) return <LoadingSpinner message={message} />;

      return (
         <ResizableContainer noToken>
            <LeftPanel player={this.username} noBottom />
            <DndProvider backend={HTML5Backend}>
               <Decklist player={this.username} sharing />
            </DndProvider>
            <RightPanel sharing />
         </ResizableContainer>
      );
   }
}

ShareableDeck.propTypes = {
   setDecklist: PropTypes.func,
   loadDeck: PropTypes.func
};

export default connect(null, { loadDeck, setDecklist })(ShareableDeck);
