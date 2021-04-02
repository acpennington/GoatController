/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Description, Help } from "@material-ui/icons";
import { SiDiscord } from "react-icons/si";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
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
      </List>
   );
}
