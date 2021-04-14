import React, { PureComponent } from "react";

import Button from "components/CustomButtons/Button.js";

import Tooltip from "@material-ui/core/Tooltip";
import { FaGamepad, FaWrench, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiSettings4Fill } from "react-icons/ri";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

class SideNavigation extends PureComponent {
   render() {
      const { classes } = this.props;

      return (
         <div className={classes.container} style={{ height: "calc(80vh - 22px)" }}>
            <Button color={"primary"} size="lg" round style={{ width: "99%" }}>
               <FaGamepad /> Leagues
            </Button>
            <Button color={"primary"} size="lg" round style={{ width: "99%" }}>
               <FaWrench /> Deck Constructor
            </Button>
            <Tooltip
               id="comingsoon"
               title="Coming soon!"
               classes={{ tooltip: classes.tooltip }}
            >
               <Button size="lg" round style={{ width: "99%" }}>
                  <FaSearch /> Replay Viewer
               </Button>
            </Tooltip>
            <Button color={"primary"} size="lg" round style={{ width: "99%" }}>
               <CgProfile /> Profile Viewer
            </Button>
            <Button color={"primary"} size="lg" round style={{ width: "99%" }}>
               <RiSettings4Fill /> Settings
            </Button>
         </div>
      );
   }
}

export default withStyles(styles)(SideNavigation);
