import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import Button from "components/CustomButtons/Button.js";
import DeckSelector from "./DeckSelector.js";
import ResizeCards from "components/Sliders/ResizeCards.js";
import BackButton from "components/CustomButtons/BackButton.js";
import ShowCardNames from "components/Switches/ShowCardNames.js";
import StackSameName from "components/Switches/StackSameName.js";
import DeckWL from "./DeckWL.js";

import { IoMdHelpCircle } from "react-icons/io";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/rightPanel.js";

class DeckSettings extends PureComponent {
   render() {
      const { classes, player, sharing } = this.props;

      return (
         <div className={classes.container}>
            <FriendlyScroll id="deckSettings" flexDirection="column">
               {!sharing && <BackButton href="wall" size="lg" />}
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

DeckSettings.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string,
   sharing: PropTypes.bool
};

export default withStyles(styles)(DeckSettings);
