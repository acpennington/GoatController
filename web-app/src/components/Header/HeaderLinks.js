import React from "react";
import PropTypes from "prop-types";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Description, Help } from "@material-ui/icons";
import { SiDiscord } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import People from "@material-ui/icons/People";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

function HeaderLinks({ loggedInAs }) {
   const classes = useStyles();
   return (
      <List className={classes.list}>
         <ListItem className={classes.listItem}>
            <Tooltip
               id="FAQ"
               title="More about GoatDuels.com"
               placement={window.innerWidth > 959 ? "top" : "left"}
               classes={{ tooltip: classes.tooltip }}
            >
               <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  color="transparent"
                  target="_blank"
                  className={classes.navLink}
               >
                  <Help className={classes.icons} /> FAQ
               </Button>
            </Tooltip>
         </ListItem>
         <ListItem className={classes.listItem}>
            <Tooltip
               id="rulings"
               title="Lookup any Goat ruling"
               placement={window.innerWidth > 959 ? "top" : "left"}
               classes={{ tooltip: classes.tooltip }}
            >
               <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  color="transparent"
                  target="_blank"
                  className={classes.navLink}
               >
                  <Description className={classes.icons} /> Card Rulings
               </Button>
            </Tooltip>
         </ListItem>
         <ListItem className={classes.listItem}>
            <Tooltip
               id="facebook"
               title="Follow us on facebook"
               placement={window.innerWidth > 959 ? "top" : "left"}
               classes={{ tooltip: classes.tooltip }}
            >
               <Button
                  color="transparent"
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  className={classes.navLink}
               >
                  <i className={classes.socialIcons + " fab fa-facebook"} />
               </Button>
            </Tooltip>
         </ListItem>
         <ListItem className={classes.listItem}>
            <Tooltip
               id="discord"
               title="Join our Discord server"
               placement={window.innerWidth > 959 ? "top" : "left"}
               classes={{ tooltip: classes.tooltip }}
            >
               <Button
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
               >
                  <SiDiscord className={classes.socialIcons} />
               </Button>
            </Tooltip>
         </ListItem>
         <ListItem className={classes.listItem}>
            <Tooltip
               id="youtube-tooltip"
               title="Watch our videos"
               placement={window.innerWidth > 959 ? "top" : "left"}
               classes={{ tooltip: classes.tooltip }}
            >
               <Button
                  color="transparent"
                  href="https://www.youtube.com/playlist?list=PL2c0kg0uXCQ4C49FlRlhm2-LO2Q6NGeh7"
                  target="_blank"
                  className={classes.navLink}
               >
                  <FaYoutube />
               </Button>
            </Tooltip>
         </ListItem>
         {loggedInAs && 
            <ListItem className={classes.listItem}>
               <Button
                  color="transparent"
                  className={classes.navLink}
               >
                  <People /> {loggedInAs}
               </Button>
            </ListItem>
         }
      </List>
   );
}

HeaderLinks.propTypes = {
   loggedInAs: PropTypes.string
};

export default HeaderLinks;