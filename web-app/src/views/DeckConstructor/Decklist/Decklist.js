import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import DeckDivider from "./DeckDivider.js";
import DeckPile from "./DeckPile.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import cardCount from "shared/cardCount.js";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";

import { MAINDECK, SIDEDECK } from "shared/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";

class Decklist extends Component {
   constructor(props) {
      super(props);

      if (!props.sharing) {
         const storage = window.sessionStorage;
         const decks = JSON.parse(storage.getItem("decks"));
         const activeDeck = decks[props.deckLoaded];
         props.setDecklist(activeDeck);
      }
   }

   componentDidMount() {
      if (this.props.sharing) this.forceUpdate();
   }

   render() {
      const { classes, player, decklist, sharing } = this.props;
      const { maindeck, sidedeck } = decklist;

      const mainCount = cardCount(maindeck);
      const sideCount = cardCount(sidedeck);

      const maxHeight = this.context;

      return (
         <div id="decklistContainer" className={classes.container}>
            <div className={classes.allCards}>
               <FriendlyScroll
                  id="decklist"
                  flexDirection="column"
                  count={mainCount * sideCount}
                  style={{ flexFlow: "row wrap", maxHeight: maxHeight - 6 + "px" }}
               >
                  <DeckPile player={player} name={MAINDECK} noDrop={sharing} />
                  <DeckDivider mainCount={mainCount} sideCount={sideCount} />
                  <DeckPile player={player} name={SIDEDECK} cardCount={sideCount} noDrop={sharing} />
               </FriendlyScroll>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { decklist: state.decklist, deckLoaded: state.settings.deckLoaded };
}

Decklist.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired,
   sharing: PropTypes.bool,
   deckLoaded: PropTypes.string.isRequired,
   setDecklist: PropTypes.func.isRequired,
   decklist: PropTypes.object.isRequired
};

Decklist.contextType = SizeContext;

export default connect(mapStateToProps, { setDecklist })(withStyles(styles)(Decklist));
