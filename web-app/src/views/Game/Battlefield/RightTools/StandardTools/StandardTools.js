import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import ButtonRow from "components/CustomButtons/ButtonRow.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";

import CardScript from "components/CardScript/CardScript.js";
import Counters from "./Counters.js";
import ConcedeButton from "./ConcedeButton.js";
import RevealHandButton from "./RevealHandButton.js";
import ShuffleDeckButton from "./ShuffleDeckButton.js";
import Phases from "./Phases.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";
import { resetSolo } from "stateStore/actions/game/field.js";
import ShowCardNames from "components/Switches/ShowCardNames.js";
import Shadow from "components/Shadow/Shadow.js";
import Sound from "components/Switches/Sound.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

class StandardTools extends PureComponent {
   render() {
      const { classes, player, resetSolo } = this.props;
      const { name, solo } = player;

      return (
         <div className={classes.container}>
            <FriendlyScroll id="standard" flexDirection="column">
               {solo ? (
                  <ButtonRow>
                     <Button color="primary" fullWidth round onClick={() => resetSolo(name)}>
                        Reset
                     </Button>
                     <Button color="primary" fullWidth round href="/wall">
                        Quit
                     </Button>
                  </ButtonRow>
               ) : (
                  <ConcedeButton />
               )}
               <Phases heroPlayer={name} />
               <Counters heroPlayer={name} />
               <RevealHandButton name={name} />
               <ShuffleDeckButton heroPlayer={name} />
               <CardScript heroPlayer={name} />
               <Shadow>
                  <Sound />
                  <ShowCardNames />
               </Shadow>
            </FriendlyScroll>
         </div>
      );
   }
}

StandardTools.propTypes = {
   player: PropTypes.object.isRequired
};

StandardTools.contextType = WebSocketContext;

export default connect(null, { resetSolo })(withStyles(styles)(StandardTools));
