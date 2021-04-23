import React, { PureComponent } from "react";

import Button from "components/CustomButtons/Button.js";

import Tooltip from "@material-ui/core/Tooltip";
import { FaGamepad, FaWrench, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiSettings4Fill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

class SideNavigation extends PureComponent {
   render() {
      const { classes } = this.props;

      return (
         <div className={classes.container} style={{ position: "fixed", width: "250px" }}>
            <Tooltip id="leagues" title="Find games here!" classes={{ tooltip: classes.tooltip }}>
               <Button color="primary" size="lg" round style={{ width: "99%" }} href="/game">
                  <FaGamepad /> Leagues
               </Button>
            </Tooltip>
            <Button color="primary" size="lg" round style={{ width: "99%" }} href="/solo">
               <BsFillPersonFill /> Solo Duel
            </Button>
            <Tooltip title="Coming soon!" classes={{ tooltip: classes.tooltip }}>
               <Button size="lg" round style={{ width: "99%" }}>
                  <FaWrench /> Deck Constructor
               </Button>
            </Tooltip>
            <Tooltip title="Coming soon!" classes={{ tooltip: classes.tooltip }}>
               <Button size="lg" round style={{ width: "99%" }}>
                  <FaSearch /> Replay Viewer
               </Button>
            </Tooltip>
            <Tooltip title="Coming soon!" classes={{ tooltip: classes.tooltip }}>
               <Button size="lg" round style={{ width: "99%" }}>
                  <CgProfile /> Profile Viewer
               </Button>
            </Tooltip>
            <Tooltip title="Coming soon!" classes={{ tooltip: classes.tooltip }}>
               <Button size="lg" round style={{ width: "99%" }}>
                  <ShoppingCartIcon /> Shop
               </Button>
            </Tooltip>
            <Button color="primary" size="lg" round style={{ width: "99%" }} href="/settings">
               <RiSettings4Fill /> Settings
            </Button>
         </div>
      );
   }
}

export default withStyles(styles)(SideNavigation);
