import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import YouTube from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";
import { FaTwitch } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/commonPages.js";

class FieldIcon extends PureComponent {
   render() {
      const { field, noColor, classes } = this.props;

      switch (field) {
         case "website":
            return <LanguageIcon className={noColor ? "" : classes.inputIconsColor} />;
         case "discord":
            return <SiDiscord className={noColor ? "" : classes.inputIconsColor} />;
         case "youtube":
            return <YouTube className={noColor ? "" : classes.inputIconsColor} />;
         case "twitch":
            return <FaTwitch className={noColor ? "" : classes.inputIconsColor} />;
         default:
            return null;
      }
   }
}

FieldIcon.propTypes = {
   classes: PropTypes.object.isRequired,
   noColor: PropTypes.bool,
   field: PropTypes.string.isRequired
};

export default withStyles(styles)(FieldIcon);
