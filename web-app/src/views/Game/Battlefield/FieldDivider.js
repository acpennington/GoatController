import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import CardScript from "components/CardScript/CardScript.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";

class FieldDivider extends PureComponent {
   render() {
      const { classes, heroPlayer } = this.props;

      return (
         <div className={classes.fieldDivider}>
            <CardScript heroPlayer={heroPlayer} />
         </div>
      );
   }
}

FieldDivider.propTypes = {
   classes: PropTypes.object.isRequired,
   heroPlayer: PropTypes.string.isRequired
};

export default withStyles(styles)(FieldDivider);
