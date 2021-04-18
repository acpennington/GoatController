import React, { PureComponent } from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import { FaSave } from "react-icons/fa";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import { checkToken } from "utils/authToken.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

class SettingsPage extends PureComponent {
   constructor(props) {
      super(props);
      const settings = JSON.parse(window.sessionStorage.getItem("settings")) || "";
      this.state = { settings };
   }

   render() {
      checkToken();

      const { classes, ...rest } = this.props;
      const { settings } = this.state;

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
                  backgroundImage: 'url("/backgrounds/' + settings.gamebg + '")',
                  backgroundSize: "cover",
                  backgroundPosition: "center"
               }}
            >
               <div className={classes.container}>
                  <div style={{ marginTop: "-5vh", marginBottom: "-100%" }}>
                     <GridContainer justify="center">
                        <GridItem xs={12}>
                           <div style={{ textAlign: "center" }}>
                              <Button color="primary" size="lg" round href="/wall">
                                 <BsArrowLeftShort /> Back
                              </Button>
                              <Button color="primary" size="lg" round>
                                 <FaSave /> Save
                              </Button>
                           </div>
                        </GridItem>
                     </GridContainer>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(SettingsPage);
