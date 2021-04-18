import React, { PureComponent } from "react";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

class Wall extends PureComponent {
   render() {
      const { classes, ...rest } = this.props;

      return <div></div>;
   }
}

export default withStyles(styles)(Wall);
