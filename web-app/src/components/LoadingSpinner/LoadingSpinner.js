import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Shadow from "components/Shadow/Shadow.js";
import setBodyImage from "utils/setBodyImage.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/loadingSpinnerStyle.js";

class LoadingSpinner extends PureComponent {
   constructor(props) {
      super(props);
      setBodyImage();
   }

   render() {
      const { classes, message } = this.props;

      return (
         <div className={classes.container}>
            <div className={classes.spinner}></div>
            <Shadow>
               <h1>{message || "Loading..."}</h1>
            </Shadow>
         </div>
      );
   }
}

LoadingSpinner.propTypes = {
   classes: PropTypes.object.isRequired,
   message: PropTypes.string
};

export default withStyles(styles)(LoadingSpinner);
