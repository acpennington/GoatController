import React, { PureComponent } from "react";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import SideNavigation from "./SideNavigation.js";
import GetPosts from "./GetPosts.js";
import { checkToken } from "utils/authToken.js";
import setBodyImage from "utils/setBodyImage.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

class Wall extends PureComponent {
   constructor(props) {
      super(props);
      checkToken();

      const settings = JSON.parse(window.sessionStorage.getItem("settings"));
      setBodyImage(settings.gamebg);
   }

   render() {
      const { classes, ...rest } = this.props;

      return (
         <div>
            <Header
               absolute
               color="transparent"
               brand="Goat Duels"
               rightLinks={<HeaderLinks loggedInAs={window.sessionStorage.getItem("username")} />}
               fixed
               changeColorOnScroll={{
                  height: 100,
                  color: "semitransparent"
               }}
               {...rest}
            />
            <div className={classes.pageHeader}>
               <div className={classes.container}>
                  <div style={{ marginTop: "-5vh", marginBottom: "-100%" }}>
                     <SideNavigation />
                     <GetPosts />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(Wall);
