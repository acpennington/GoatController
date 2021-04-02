import React, { useState } from "react";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SideNavigation from "./SideNavigation.js";
import GetPosts from "./GetPosts.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
   const [cardAnimation, setCardAnimation] = useState("cardHidden");

   setTimeout(function () {
      setCardAnimation("");
   }, 700);

   const classes = useStyles();
   const { ...rest } = props;

   return (
      <div>
         <Header
            absolute
            color="transparent"
            brand="Goat Duels: A Dueling Simulator Optimized For Goat Format"
            rightLinks={<HeaderLinks />}
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
               backgroundImage: 'url("/backgrounds/thousandeyes.png")',
               backgroundSize: "cover",
               backgroundPosition: "center"
            }}
         >
            <div className={classes.container}>
               <div className={classes[cardAnimation]} style={{ marginTop: "-45px", marginBottom: "-100%" }}>
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
