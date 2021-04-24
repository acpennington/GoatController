import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

import { switchDiscard } from "stateStore/actions/settings.js";
import { GRAVEYARD, discardZones } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

class ShowingDiscard extends PureComponent {
   componentDidMount() {
      bind("s", this.props.switchDiscard);
   }

   componentWillUnmount() {
      unbind("s");
   }

   render() {
      const { classes, discardPile, switchDiscard } = this.props;

      const otherZone = discardZones.filter((zone) => zone !== discardPile)[0];

      return (
         <Tooltip
            id="switch discard"
            title={"Click to switch to " + otherZone}
            placement="bottom"
            classes={{ tooltip: classes.tooltip }}
         >
            <Button
               onClick={switchDiscard}
               style={
                  discardPile === GRAVEYARD
                     ? {
                          backgroundImage:
                             'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/cards/art/CalloftheHaunted.jpg")',
                          backgroundPosition: "50% 95%"
                       }
                     : {
                          backgroundImage:
                             'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/DimensionFusion.jpg")'
                       }
               }
            >
               Showing
               <br />
               {discardPile}
            </Button>
         </Tooltip>
      );
   }
}

ShowingDiscard.propTypes = {
   discardPile: PropTypes.string.isRequired
};

export default connect(null, { switchDiscard })(withStyles(styles)(ShowingDiscard));
