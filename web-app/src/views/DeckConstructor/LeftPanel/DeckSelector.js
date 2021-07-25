import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import GenericFinder from "components/CardFinder/GenericFinder.js";
import ButtonRow from "components/CustomButtons/ButtonRow";
import Button from "components/CustomButtons/Button.js";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";
import { loadDeck } from "stateStore/actions/shared/settings.js";

import { FaSave } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class DeckSelector extends PureComponent {
   getDecks = () => JSON.parse(window.sessionStorage.getItem("decks"));

   loadDeck = (value) => {
      const { loadDeck, setDecklist } = this.props;
      const decks = this.getDecks();
      loadDeck(value);
      setDecklist(decks[value]);
   };

   deleteDeck = () => {};

   setActiveDeck = () => {};

   saveDeck = () => {};

   render() {
      const { classes, activeDeck } = this.props;
      const decks = this.getDecks();

      const options = [];
      for (const deck in decks) options.push({ name: deck, value: deck });

      return (
         <div className={classes.deckSelector}>
            <div className={classes.buttonRow}>
               <ButtonRow>
                  <Button color="primary" fullWidth round onClick={this.deleteDeck}>
                     <MdDeleteForever /> Delete
                  </Button>
                  <Button color="primary" fullWidth round onClick={this.setActiveDeck}>
                     <BsStarFill /> Set Active
                  </Button>
                  <Button color="primary" fullWidth round onClick={this.saveDeck}>
                     <FaSave /> Save
                  </Button>
               </ButtonRow>
            </div>
            <GenericFinder value={activeDeck} options={options} onChange={this.loadDeck} />
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { activeDeck: state.settings.deckLoaded };
}

DeckSelector.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { setDecklist, loadDeck })(withStyles(styles)(DeckSelector));
