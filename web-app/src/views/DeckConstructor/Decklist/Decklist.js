import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DeckDivider from "./DeckDivider.js";
import DeckPile from "./DeckPile.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";

import { MAINDECK, SIDEDECK } from "utils/constants";

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

   render() {
      const { classes, player, decklist, sharing } = this.props;
      const { maindeck, sidedeck } = decklist;

      const mainCount = cardCount(maindeck);
      const sideCount = cardCount(sidedeck);

      const containerDiv = document.getElementById("decklistContainer");
      const maxHeight = containerDiv ? containerDiv.offsetHeight : 0;

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
                  <DeckPile player={player} name={SIDEDECK} count={sideCount} noDrop={sharing} />
               </FriendlyScroll>
            </div>
         </div>
      );
   }
}

function cardCount(cardsMap) {
   let count = 0;

   Object.keys(cardsMap).forEach((cardName) => {
      count += cardsMap[cardName];
   });

   return count;
}

function mapStateToProps(state) {
   return { decklist: state.decklist, deckLoaded: state.settings.deckLoaded };
}

Decklist.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired,
   sharing: PropTypes.bool
};

export default connect(mapStateToProps, { setDecklist })(withStyles(styles)(Decklist));
