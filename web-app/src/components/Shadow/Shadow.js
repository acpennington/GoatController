import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/shadowStyle.js";

class Shadow extends Component {
   render() {
      const { classes, children } = this.props;

      return <div className={classes.shadow}>{children}</div>;
   }
}

Shadow.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Shadow);
