import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Slider from "@material-ui/core/Slider";

import DecklistCard from "components/YugiohCard/DecklistCard.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll";
import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";

import { MAINDECK } from "utils/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/decklist.js";

class Decklist extends Component {
   constructor(props) {
      super(props);

      this.state = { sliderValue: 50 };

      const storage = window.sessionStorage;
      const decks = JSON.parse(storage.getItem("decks"));
      const activeDeckName = storage.getItem("activeDeck");
      const activeDeck = decks[activeDeckName];
      props.setDecklist(activeDeck);
   }

   sliderChange = (event, newValue) => this.setState({ sliderValue: newValue });

   render() {
      const { classes, width, decklist, player } = this.props;
      const { maindeck, sidedeck } = decklist;
      const { sliderValue } = this.state;
      const cardHeight = ((this.context / 6.5) * sliderValue) / 50;

      const containerDiv = document.getElementById("decklistContainer");
      const resizeCardsDiv = document.getElementById("resizeCards");
      const maxHeight = containerDiv && resizeCardsDiv ? containerDiv.offsetHeight - resizeCardsDiv.offsetHeight : 0;

      const mainCards = [];
      const mainLen = maindeck.length;
      for (let i = 0; i < mainLen; i++)
         mainCards.push(
            <DecklistCard height={cardHeight} name={maindeck[i].name} quantity={maindeck[i].count} player={player} location={MAINDECK} zone={i} key={i} />
         );

      return (
         <div id="decklistContainer" className={classes.container} style={{ width, flex: width }}>
            <div id="resizeCards" className={classes.resizeCards}>
               Resize cards:
               <Slider value={sliderValue} onChange={this.sliderChange} aria-labelledby="continuous-slider" style={{ width: "25%" }} />
            </div>
            <div className={classes.allCards} style={{ height: maxHeight + "px" }}>
               <FriendlyScroll id="decklist" flexDirection="column" style={{ flexFlow: "row wrap", maxHeight: maxHeight - 6 + "px" }}>
                  <h3 className={classes.deckLabel}>Maindeck</h3>
                  <div className={classes.listContainer}>{mainCards}</div>
                  <h3 className={classes.deckLabel}>Sidedeck</h3>
                  <div className={classes.listContainer}></div>
               </FriendlyScroll>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { decklist: state.decklist };
}

Decklist.propTypes = {
   classes: PropTypes.object.isRequired,
   width: PropTypes.string.isRequired,
   player: PropTypes.string.isRequired
};

Decklist.contextType = SizeContext;

export default connect(mapStateToProps, { setDecklist })(withStyles(styles)(Decklist));
