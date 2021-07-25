import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import GenericFinder from "components/CardFinder/GenericFinder.js";
import ButtonRow from "components/CustomButtons/ButtonRow";
import Button from "components/CustomButtons/Button.js";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";
import { loadDeck } from "stateStore/actions/shared/settings.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { FaSave } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/leftPanel.js";

class DeckSelector extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { deckName: "" };
   }

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

   setDeckName = (event) => {
      if (event.key === "Enter") {
         this.createDeck();
         event.target.value = "";
      } else this.setState({ deckName: event.target.value });
   };

   createDeck = () => {};

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
            <div className={classes.newDeck}>
               <Button color="success" round onClick={this.createDeck}>
                  <IoMdCreate /> Create New Deck
               </Button>
               <CustomInput
                  id="Message"
                  white
                  formControlProps={{
                     fullWidth: true
                  }}
                  inputProps={{
                     onKeyPress: this.setDeckName,
                     margin: "dense"
                  }}
               />
            </div>
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
