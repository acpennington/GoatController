import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import Shadow from "components/Shadow/Shadow.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/loadingSpinnerStyle.js";

class LoadingSpinner extends PureComponent {
   render() {
      const { classes, message } = this.props;

      return (
         <div className={classes.container}>
            <div className={classes.spinner}></div>
            <div className={classes.message}>
               <Shadow>
                  <h1>{message || "Loading..."}</h1>
               </Shadow>
            </div>
         </div>
      );
   }
}

LoadingSpinner.propTypes = {
   classes: PropTypes.object.isRequired,
   message: PropTypes.string
};

export default withStyles(styles)(LoadingSpinner);
