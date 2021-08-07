import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import Button from "components/CustomButtons/Button.js";
import DeckSelector from "./DeckSelector.js";
import ResizeCards from "components/Sliders/ResizeCards.js";
import BackButton from "components/CustomButtons/BackButton.js";
import ShowCardNames from "components/Switches/ShowCardNames.js";
import StackSameName from "components/Switches/StackSameName.js";

import { IoMdHelpCircle } from "react-icons/io";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/rightPanel.js";

class DeckSettings extends PureComponent {
   render() {
      const { classes, player } = this.props;

      return (
         <div className={classes.container}>
            <FriendlyScroll id="deckSettings" flexDirection="column">
               <BackButton href="wall" size="lg" />
               <Button color="info" size="lg" round href="/fusions" target="_blank">
                  <IoMdHelpCircle />
                  Fusions
                  <IoMdHelpCircle style={{ marginLeft: "5px" }} />
               </Button>
               <ResizeCards />
               <ShowCardNames />
               <StackSameName />
               <DeckSelector player={player} />
            </FriendlyScroll>
         </div>
      );
   }
}

DeckSettings.propTypes = {
   player: PropTypes.string.isRequired
};

export default withStyles(styles)(DeckSettings);
