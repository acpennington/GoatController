import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/components/shadowStyle.js";

class Shadow extends Component {
   render() {
      const { classes, style, children } = this.props;

      return (
         <div className={classes.shadow} style={style}>
            {children}
         </div>
      );
   }
}

Shadow.propTypes = {
   classes: PropTypes.object.isRequired,
   style: PropTypes.object,
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
};

export default withStyles(styles)(Shadow);
