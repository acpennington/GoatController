import React, { PureComponent } from "react";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SideNavigation from "./SideNavigation.js";
import GetPosts from "./GetPosts.js";
import { checkToken } from "utils/authToken.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

class Wall extends PureComponent {
   render() {
      checkToken();
      const { classes, ...rest } = this.props;

      return (
         <div>
            <Header
               absolute
               color="transparent"
               brand="Goat Duels"
               rightLinks={<HeaderLinks loggedInAs="ACP" />}
               fixed
               changeColorOnScroll={{
                  height: 100,
                  color: "semitransparent"
               }}
               {...rest}
            />
            <div
               className={classes.pageHeader}
               style={{
                  backgroundImage: 'url("/backgrounds/Thousand_Eyes_Goats.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center"
               }}
            >
               <div className={classes.container}>
                  <div style={{ marginTop: "-5vh", marginBottom: "-100%" }}>
                     <GridContainer justify="center">
                        <GridItem xs={6} sm={5} md={5} lg={4}>
                           <SideNavigation />
                        </GridItem>
                        <GridItem xs={6} sm={7} md={7} lg={8}>
                           <GetPosts />
                        </GridItem>
                     </GridContainer>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(Wall);
