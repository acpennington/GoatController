import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import { MdDescription, MdHelp, MdPeople } from "react-icons/md";
import { SiDiscord, SiYoutube } from "react-icons/si";
import { GiTwoCoins } from "react-icons/gi";

import Button from "components/CustomButtons/Button.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

class HeaderLinks extends PureComponent {
   render() {
      const { classes, loggedInAs, goatGold } = this.props;

      return (
         <List className={classes.list}>
            <ListItem className={classes.listItem}>
               <Tooltip id="FAQ" title="More about GoatDuels.com" placement={window.innerWidth > 959 ? "top" : "left"} classes={{ tooltip: classes.tooltip }}>
                  <Button href="/faq" color="transparent" target="_blank" className={classes.navLink}>
                     <MdHelp className={classes.icons} /> FAQ
                  </Button>
               </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
               <Tooltip id="rulings" title="Lookup any Goat ruling" placement={window.innerWidth > 959 ? "top" : "left"} classes={{ tooltip: classes.tooltip }}>
                  <Button href="/rulings" color="transparent" target="_blank" className={classes.navLink}>
                     <MdDescription className={classes.icons} /> Card Rulings
                  </Button>
               </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
               <Tooltip id="facebook" title="Follow us on facebook" placement={window.innerWidth > 959 ? "top" : "left"} classes={{ tooltip: classes.tooltip }}>
                  <Button color="transparent" href="https://www.facebook.com/" target="_blank" className={classes.navLink}>
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
                  <Button target="_blank" color="transparent" className={classes.navLink}>
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
                  <Button color="transparent" href="https://www.youtube.com/allencpennington" target="_blank" className={classes.navLink}>
                     <SiYoutube className={classes.socialIcons} />
                  </Button>
               </Tooltip>
            </ListItem>
            {loggedInAs && (
               <ListItem className={classes.listItem}>
                  <Tooltip id="settings" title="Account settings" placement={window.innerWidth > 959 ? "top" : "left"} classes={{ tooltip: classes.tooltip }}>
                     <Button color="transparent" className={classes.navLink} href="/settings">
                        <MdPeople /> {loggedInAs}
                     </Button>
                  </Tooltip>
               </ListItem>
            )}
            {goatGold !== null && (
               <ListItem className={classes.listItem}>
                  <Tooltip
                     id="shop"
                     title={goatGold + " Goat Gold"}
                     placement={window.innerWidth > 959 ? "top" : "left"}
                     classes={{ tooltip: classes.tooltip }}
                  >
                     <Button color="transparent" className={classes.navLink} href="/shop">
                        <GiTwoCoins color="gold" /> {goatGold}
                     </Button>
                  </Tooltip>
               </ListItem>
            )}
         </List>
      );
   }
}

HeaderLinks.propTypes = {
   loggedInAs: PropTypes.string,
   goatGold: PropTypes.string,
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderLinks);
