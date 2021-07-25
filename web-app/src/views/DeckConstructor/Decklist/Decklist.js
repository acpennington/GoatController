import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Slider from "@material-ui/core/Slider";

import DeckPile from "./DeckPile";
import Switches from "./Switches.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";

import { MAINDECK, SIDEDECK } from "utils/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";
import BackButton from "components/CustomButtons/BackButton";

class Decklist extends Component {
   constructor(props) {
      super(props);

      this.state = { sliderValue: 60 };

      const storage = window.sessionStorage;
      const decks = JSON.parse(storage.getItem("decks"));
      const activeDeck = decks[props.deckLoaded];
      props.setDecklist(activeDeck);
   }

   sliderChange = (event, newValue) => this.setState({ sliderValue: newValue });

   render() {
      const { classes, width, decklist, player } = this.props;
      const { maindeck, sidedeck } = decklist;
      const { sliderValue } = this.state;

      const containerDiv = document.getElementById("decklistContainer");
      const resizeCardsDiv = document.getElementById("resizeCards");
      const maxHeight = containerDiv && resizeCardsDiv ? containerDiv.offsetHeight - resizeCardsDiv.offsetHeight : 0;

      return (
         <div id="decklistContainer" className={classes.container} style={{ width, flex: width }}>
            <div id="resizeCards" className={classes.resizeCards}>
               <BackButton href="wall" size="md" />
               Resize cards:
               <Slider value={sliderValue} onChange={this.sliderChange} aria-labelledby="continuous-slider" style={{ width: "20%" }} />
               <Switches />
            </div>
            <div className={classes.allCards} style={{ height: maxHeight + "px" }}>
               <FriendlyScroll id="decklist" flexDirection="column" style={{ flexFlow: "row wrap", maxHeight: maxHeight - 6 + "px" }}>
                  <DeckPile player={player} name={MAINDECK} cardsMap={maindeck} sliderValue={sliderValue} />
                  <DeckPile player={player} name={SIDEDECK} cardsMap={sidedeck} sliderValue={sliderValue} />
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
   width: PropTypes.string.isRequired,
   player: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { setDecklist })(withStyles(styles)(Decklist));
