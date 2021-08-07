import React, { PureComponent } from "react";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import DeckSelector from "./DeckSelector.js";
import ResizeCards from "./ResizeCards.js";
import BackButton from "components/CustomButtons/BackButton.js";
import Switches from "./Switches.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/rightPanel.js";

class DeckSettings extends PureComponent {
   render() {
      const { classes } = this.props;

      return (
         <div className={classes.container}>
            <FriendlyScroll id="deckSettings" flexDirection="column">
               <BackButton href="wall" size="lg" />
               <ResizeCards />
               <Switches />
               <DeckSelector />
            </FriendlyScroll>
         </div>
      );
   }
}

export default withStyles(styles)(DeckSettings);
