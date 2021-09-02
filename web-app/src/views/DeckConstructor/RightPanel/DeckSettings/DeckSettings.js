import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import Button from "components/CustomButtons/Button.js";
import DeckSelector from "./DeckSelector.js";
import ResizeCards from "components/Sliders/ResizeCards.js";
import BackButton from "components/CustomButtons/BackButton.js";
import DialogButton from "components/CustomButtons/DialogButton.js";
import DialogContentText from "@material-ui/core/DialogContentText";
import ShowCardNames from "components/Switches/ShowCardNames.js";
import StackSameName from "components/Switches/StackSameName.js";
import DeckWL from "./DeckWL.js";

import { BsArrowLeftShort } from "react-icons/bs";
import { IoMdHelpCircle } from "react-icons/io";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/rightPanel.js";
import { Fragment } from "react";

class DeckSettings extends PureComponent {
   render() {
      const { classes, player, sharing, deckLoaded, unsavedChanges } = this.props;

      // TODO: Ideally we would prompt to save the deck here instead of simply warning about unsaved
      // changes, but that would require lifting the state out of the DeckSelector...
      const back = unsavedChanges ? (
         <DialogButton
            button={
               <Fragment>
                  <BsArrowLeftShort /> To Wall
               </Fragment>
            }
            buttonProps={{ color: "primary", round: true, size: "lg" }}
            onConfirm={() => (window.location = "/wall")}
            dialogTitle={"Unsaved Changes"}
            dialogContent={<DialogContentText>{`"${deckLoaded}" has unsaved changes, are you sure you wish to proceed?`}</DialogContentText>}
            affirmative={"Yes"}
            affirmativeProps={{ color: "primary" }}
            negative={"No"}
            negativeProps={{ color: "primary" }}
         />
      ) : (
         <BackButton href="wall" size="lg" />
      );

      return (
         <div className={classes.container}>
            <FriendlyScroll id="deckSettings" flexDirection="column">
               {!sharing && back}
               <Button color="info" size="lg" round href="/fusions" target="_blank">
                  <IoMdHelpCircle />
                  Fusions
                  <IoMdHelpCircle style={{ marginLeft: "5px" }} />
               </Button>
               <ResizeCards />
               <ShowCardNames />
               <StackSameName />
               {!sharing && <DeckSelector player={player} />}
               <DeckWL />
            </FriendlyScroll>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { deckLoaded: state.settings.deckLoaded, unsavedChanges: state.settings.unsavedChanges };
}

DeckSettings.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string,
   sharing: PropTypes.bool
};

export default connect(mapStateToProps)(withStyles(styles)(DeckSettings));
