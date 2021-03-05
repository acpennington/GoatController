import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

import { switchDiscard } from "stateStore/actions/settings.js";
import { discardZones } from "utils/constants.js";

class RightTools extends PureComponent {
   render() {
      const { classes, discardPile } = this.props;
      const otherZone = discardZones.filter((zone) => zone !== discardPile)[0];

      return (
         <div className={classes.rightTools}>
            <Tooltip
               id="instagram-twitter"
               title={"Click to switch to " + otherZone}
               placement="bottom"
               classes={{ tooltip: classes.tooltip }}
            >
               <Button fullWidth color="info" onClick={this.props.switchDiscard}>
                  Showing
                  <br />
                  {discardPile}
               </Button>
            </Tooltip>
         </div>
      );
   }
}

export default connect(null, { switchDiscard })(withStyles(styles)(RightTools));
