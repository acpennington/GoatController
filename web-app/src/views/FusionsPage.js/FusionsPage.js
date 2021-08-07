import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ResizableContainer from "components/ResizableContainer/ResizableContainer.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";
import RenderFusions from "./RenderFusions.js";
import ShowCardNames from "components/Switches/ShowCardNames.js";

import { HERO } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/fusionsPage.js";

class FusionsPage extends PureComponent {
   render() {
      const { classes, hoverCard, selectedCard } = this.props;

      return (
         <ResizableContainer noToken>
            <div className={classes.leftPanel}>
               <YugiohCardExpanded hoverCard={hoverCard} selectedCard={selectedCard} />
               <div className={classes.bottomContainer}>
                  <FriendlyScroll id="leftPanel" flexDirection="column" contStyle={{ height: "100%" }} style={{ height: "100%" }}>
                     <h3 className={classes.center}>Dude, Where's My Fusions?</h3>
                     <h4>
                        In Goat Format, players can use an unlimited number of Fusion Monsters in the Fusion Deck. Additionally, there is no downside to using
                        three copies of every legal Fusion Monster in the game, just in case. Because of this, and to save our users the effort, GoatDuels
                        automatically pre-loads three copies of each legal Fusion Monster into every game.
                     </h4>
                     <h4>
                        Adding Fusion Monsters to your Fusion Deck is not part of the deck-building process. It's all done for you! To the right, you will see a
                        list of every Goat Format legal Fusion Monster, just in case you need it for reference.
                     </h4>
                     <div className={classes.center}>
                        <ShowCardNames />
                     </div>
                  </FriendlyScroll>
               </div>
            </div>
            <div className={classes.container}>
               <RenderFusions />
            </div>
         </ResizableContainer>
      );
   }
}

function mapStateToProps(state) {
   return { hoverCard: state.hoverCard, selectedCard: state.selectedCard[HERO] };
}

FusionsPage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(FusionsPage));
