import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";

import CustomInput from "components/CustomInput/CustomInput.js";
import GenericFinder from "components/CardFinder/GenericFinder.js";
import ButtonRow from "components/CustomButtons/ButtonRow";
import Button from "components/CustomButtons/Button.js";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";
import { loadDeck, setUnsaved } from "stateStore/actions/shared/settings.js";

import { FaSave, FaUndo } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";

import getApiStage from "utils/getApiStage.js";
import { getAuthHeaders } from "utils/authToken.js";
import { API_URL } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/rightPanel.js";

const blankDeck = {
   wins: 0,
   losses: 0,
   maindeck: {},
   sidedeck: {},
   visibility: "private",
   deckType: "Unknown"
};

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

   deleteDeck = async () => {
      const { deckLoaded, loadDeck, setDecklist } = this.props;
      const config = getAuthHeaders();
      const body = { deckName: deckLoaded };

      const res = await axios.delete(API_URL + getApiStage() + "/users/deck", { data: body, ...config });
      if (res.data.statusCode === 200) {
         const storage = window.sessionStorage;
         const decks = this.getDecks();
         delete decks[deckLoaded];
         storage.setItem("decks", JSON.stringify(decks));

         const deckNames = Object.keys(decks);
         const nextDeckName = deckNames[0];
         loadDeck(nextDeckName);
         setDecklist(decks[nextDeckName]);
      }
   };

   setActiveDeck = async () => {
      const { deckLoaded } = this.props;
      const config = getAuthHeaders();
      const body = { deckName: deckLoaded };

      const res = await axios.patch(API_URL + getApiStage() + "/users/deck", body, config);
      if (res.data.statusCode === 200) {
         const storage = window.sessionStorage;
         storage.setItem("activeDeck", deckLoaded);
         this.forceUpdate();
      }
   };

   saveDeck = async () => {
      const { decklist, setUnsaved, deckLoaded } = this.props;
      const { maindeck, sidedeck } = decklist;

      const config = getAuthHeaders();
      const body = { deckName: deckLoaded, maindeck, sidedeck };

      const res = await axios.put(API_URL + getApiStage() + "/users/deck", body, config);
      if (res.data.statusCode === 200) {
         const storage = window.sessionStorage;
         const decks = this.getDecks();
         decks[deckLoaded] = decklist;
         storage.setItem("decks", JSON.stringify(decks));

         setUnsaved(false);
      }
   };

   undoChanges = () => {
      const { deckLoaded, setDecklist } = this.props;

      const decks = JSON.parse(window.sessionStorage.getItem("decks"));
      const activeDeck = decks[deckLoaded];
      setDecklist(activeDeck);
   };

   createDeck = async () => {
      const { deckName } = this.state;
      if (deckName.length > 0) {
         const config = getAuthHeaders();
         const body = { deckName };

         const res = await axios.post(API_URL + getApiStage() + "/users/deck", body, config);
         if (res.data.statusCode === 200) {
            const { loadDeck, setDecklist } = this.props;
            const storage = window.sessionStorage;

            const decks = this.getDecks();
            decks[deckName] = blankDeck;

            storage.setItem("decks", JSON.stringify(decks));
            loadDeck(deckName);
            setDecklist(blankDeck);
         }

         this.setState({ deckName: "" });
      }
   };

   render() {
      const { classes, deckLoaded, unsavedChanges } = this.props;
      const decks = this.getDecks();

      const options = [];
      for (const deck in decks) options.push({ name: deck, value: deck });

      const activeDeck = window.sessionStorage.getItem("activeDeck");
      const deckIsActive = deckLoaded === activeDeck;

      return (
         <div className={classes.deckSelector}>
            <h3>Decks</h3>
            <div className={classes.buttonRow}>
               {!deckIsActive && (
                  <ButtonRow>
                     <Button color="primary" fullWidth round onClick={this.deleteDeck}>
                        <MdDeleteForever /> Delete
                     </Button>
                     <Button color="primary" fullWidth round onClick={this.setActiveDeck}>
                        <BsStarFill /> Set Active
                     </Button>
                  </ButtonRow>
               )}
               {unsavedChanges && (
                  <ButtonRow>
                     <Button color="primary" fullWidth round onClick={this.saveDeck}>
                        <FaSave /> Save
                     </Button>
                     <Button color="primary" fullWidth round onClick={this.undoChanges}>
                        <FaUndo /> Undo
                     </Button>
                  </ButtonRow>
               )}
            </div>
            <GenericFinder value={deckLoaded} options={options} onChange={this.loadDeck} />
            <div className={classes.flexRow}>
               <Button color="success" round onClick={this.createDeck}>
                  <IoMdCreate /> New Deck
               </Button>
               <CustomInput
                  id="Message"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     value: this.state.deckName,
                     onChange: (event) => {
                        const deckName = event.target.value;
                        if (/^([a-z0-9 ]+)$/i.test(deckName)) this.setState({ deckName });
                     },
                     onKeyPress: (event) => event.key === "Enter" && this.createDeck(),
                     margin: "dense"
                  }}
               />
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { deckLoaded: state.settings.deckLoaded, unsavedChanges: state.settings.unsavedChanges, decklist: state.decklist };
}

DeckSelector.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { setDecklist, loadDeck, setUnsaved })(withStyles(styles)(DeckSelector));
