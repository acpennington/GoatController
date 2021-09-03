import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";

import CustomInput from "components/CustomInput/CustomInput.js";
import GenericFinder from "components/CardFinder/GenericFinder.js";
import Visibility from "components/Switches/Visibility.js";
import ButtonRow from "components/CustomButtons/ButtonRow";
import DialogButton from "components/CustomButtons/DialogButton.js";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "components/CustomButtons/Button.js";
import { setDecklist } from "stateStore/actions/deckConstructor/decklist.js";
import { loadDeck, setUnsaved } from "stateStore/actions/shared/settings.js";

import { FaSave, FaUndo } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";

import getApiStage from "utils/getApiStage.js";
import verifyDecks from "shared/verifyDecks.js";
import { getAuthHeaders } from "utils/authToken.js";
import { API_URL } from "shared/constants.js";
import { getDeckOptions, getDecks } from "./utils.js";

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

// We need to allow Exarion Universe during deck verification at this stage and allow stricter
// checking to take place when the player actually attempts to use the deck in a League
const EXARION_ALLOWED = true;

class DeckSelector extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { deckName: "", saving: false, deleting: false, settingActive: false, creating: false };
   }

   loadDeck = (value) => {
      const { loadDeck, setDecklist } = this.props;
      const decks = getDecks();
      loadDeck(value);
      setDecklist(decks[value]);
   };

   deleteDeck = async () => {
      const { deckLoaded, loadDeck, setDecklist } = this.props;
      const config = getAuthHeaders();
      const body = { deckName: deckLoaded };

      this.setState({ deleting: true });
      const res = await axios.delete(API_URL + getApiStage() + "/users/deck", { data: body, ...config });
      this.setState({ deleting: false });

      if (res.data.statusCode === 200) {
         const storage = window.sessionStorage;
         const decks = getDecks();
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

      this.setState({ settingActive: true });
      const res = await axios.patch(API_URL + getApiStage() + "/users/deck", body, config);
      this.setState({ settingActive: false });

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

      this.setState({ saving: true });
      const res = await axios.put(API_URL + getApiStage() + "/users/deck", body, config);
      this.setState({ saving: false });

      if (res.data.statusCode === 200) {
         const storage = window.sessionStorage;
         const decks = getDecks();
         decks[deckLoaded] = decklist;
         storage.setItem("decks", JSON.stringify(decks));

         setUnsaved(false);
      } else console.log(JSON.stringify(res));
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

         this.setState({ creating: true });
         const res = await axios.post(API_URL + getApiStage() + "/users/deck", body, config);
         this.setState({ creating: false });

         if (res.data.statusCode === 200) {
            const { loadDeck, setDecklist } = this.props;
            const storage = window.sessionStorage;

            const decks = getDecks();
            decks[deckName] = blankDeck;

            storage.setItem("decks", JSON.stringify(decks));
            loadDeck(deckName);
            setDecklist(blankDeck);
         }

         this.setState({ deckName: "" });
      }
   };

   render() {
      const { classes, deckLoaded, unsavedChanges, player, decklist } = this.props;
      const { saving, deleting, settingActive, creating } = this.state;

      const activeDeck = window.sessionStorage.getItem("activeDeck");
      const deckIsActive = deckLoaded === activeDeck;

      const errors = verifyDecks(decklist.maindeck, decklist.sidedeck, EXARION_ALLOWED).map((error, index) => <li key={index}>{error}</li>);

      const newDeck = unsavedChanges ? (
         <DialogButton
            button={
               <Fragment>
                  <IoMdCreate /> {creating ? "Creating..." : "New Deck"}
               </Fragment>
            }
            buttonProps={{ color: "success", round: true }}
            onConfirm={async () => {
               await this.saveDeck();
               this.createDeck();
            }}
            onDeny={this.createDeck}
            dialogTitle={"Unsaved Changes"}
            dialogContent={<DialogContentText>{`Save changes to "${deckLoaded}"?`}</DialogContentText>}
            affirmative={"Yes"}
            affirmativeProps={{ color: "primary" }}
            negative={"No"}
            negativeProps={{ color: "primary" }}
         />
      ) : (
         <Button color="success" round onClick={this.createDeck}>
            <IoMdCreate /> New Deck
         </Button>
      );

      return (
         <div className={classes.deckSelector}>
            <h3>Decks</h3>
            <div className={classes.buttonRow}>
               {!deckIsActive && (
                  <ButtonRow>
                     <DialogButton
                        button={
                           <Fragment>
                              <MdDeleteForever /> {deleting ? "Deleting..." : "Delete"}
                           </Fragment>
                        }
                        buttonProps={{ color: "primary", fullWidth: true, round: true }}
                        onConfirm={this.deleteDeck}
                        dialogTitle={"Confirm Delete"}
                        dialogContent={<DialogContentText>{`Are you sure you wish to delete "${deckLoaded}"?`}</DialogContentText>}
                        affirmative={"Yes"}
                        affirmativeProps={{ color: "primary" }}
                        negative={"No"}
                        negativeProps={{ color: "primary" }}
                     />
                     {!errors.length ? (
                        <Button color="primary" fullWidth round onClick={this.setActiveDeck}>
                           <BsStarFill /> {settingActive ? "Setting..." : "Set Active"}
                        </Button>
                     ) : (
                        <DialogButton
                           button={"Illegal Deck"}
                           buttonProps={{ color: "warning", round: true, fullWidth: true }}
                           dialogTitle={"Errors"}
                           dialogContent={<ul>{errors}</ul>}
                           affirmative={"OK"}
                           affirmativeProps={{ color: "primary" }}
                        />
                     )}
                  </ButtonRow>
               )}
               {unsavedChanges && (
                  <ButtonRow>
                     <Button color="primary" fullWidth round onClick={this.saveDeck}>
                        <FaSave /> {saving ? "Saving..." : "Save"}
                     </Button>
                     <Button color="primary" fullWidth round onClick={this.undoChanges}>
                        <FaUndo /> Undo
                     </Button>
                  </ButtonRow>
               )}
            </div>
            {/* FIXME: add dialog prompting to save if unsaved */}
            <GenericFinder
               value={deckLoaded}
               options={getDeckOptions()}
               onChange={(value) => {
                  this.loadDeck(value);
                  this.forceUpdate();
               }}
            />
            <Visibility player={player} />
            <div className={classes.flexRow}>
               {newDeck}
               <CustomInput
                  id="Message"
                  white
                  formControlProps={{ fullWidth: true }}
                  inputProps={{
                     value: this.state.deckName,
                     onChange: (event) => {
                        const deckName = event.target.value;
                        if (deckName === "" || /^([a-z0-9 ]+)$/i.test(deckName)) this.setState({ deckName });
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
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { setDecklist, loadDeck, setUnsaved })(withStyles(styles)(DeckSelector));
