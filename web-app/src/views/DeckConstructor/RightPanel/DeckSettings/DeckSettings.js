import React, { PureComponent } from "react";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import Button from "components/CustomButtons/Button.js";
import DeckSelector from "./DeckSelector.js";
import ResizeCards from "./ResizeCards.js";
import BackButton from "components/CustomButtons/BackButton.js";
import Switches from "./Switches.js";

import { IoMdHelpCircle } from "react-icons/io";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/rightPanel.js";

class DeckSettings extends PureComponent {
   render() {
      const { classes } = this.props;

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
               <Switches />
               <DeckSelector />
            </FriendlyScroll>
         </div>
      );
   }
}

export default withStyles(styles)(DeckSettings);
