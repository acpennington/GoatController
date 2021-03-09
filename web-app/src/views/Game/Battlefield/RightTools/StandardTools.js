import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

import { switchDiscard } from "stateStore/actions/settings.js";
import { discardZones } from "utils/constants.js";

class StandardTools extends PureComponent {
   componentDidMount() {
      bind("s", this.props.switchDiscard);
   }

   componentWillUnmount() {
      unbind("s", this.props.switchDiscard);
   }

   render() {
      const { classes, discardPile } = this.props;
      const otherZone = discardZones.filter((zone) => zone !== discardPile)[0];

      return (
         <div className={classes.container}>
            <Tooltip
               id="switch discard"
               title={"Click to switch to " + otherZone}
               placement="bottom"
               classes={{ tooltip: classes.tooltip }}
            >
               <Button color="info" onClick={this.props.switchDiscard}>
                  Showing
                  <br />
                  {discardPile}
               </Button>
            </Tooltip>
         </div>
      );
   }
}

StandardTools.propTypes = {
   discardPile: PropTypes.string.isRequired
};

export default connect(null, { switchDiscard })(withStyles(styles)(StandardTools));
