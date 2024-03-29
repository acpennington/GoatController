import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import NavButton from "./NavButton";
import { FaGamepad, FaWrench, FaSearch, FaChartBar } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiSettings4Fill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

class SideNavigation extends PureComponent {
   render() {
      const { classes } = this.props;

      return (
         <div className={classes.container} style={{ position: "fixed", width: "250px" }}>
            <NavButton href="/leagues" tip="Find games here!">
               <FaGamepad /> Leagues
            </NavButton>
            <NavButton href="/game">
               <BsFillPersonFill /> Solo Duel
            </NavButton>
            <NavButton href="/deckconstructor">
               <FaWrench /> Deck Constructor
            </NavButton>
            <NavButton>
               <FaSearch /> Replay Viewer
            </NavButton>
            <NavButton>
               <FaChartBar /> Big Goat Data
            </NavButton>
            <NavButton>
               <CgProfile /> Profile Viewer
            </NavButton>
            <NavButton>
               <MdShoppingCart /> Shop
            </NavButton>
            <NavButton href="/settings">
               <RiSettings4Fill /> Settings
            </NavButton>
         </div>
      );
   }
}

SideNavigation.propTypes = {
   classes: PropTypes.object
};

export default withStyles(styles)(SideNavigation);
