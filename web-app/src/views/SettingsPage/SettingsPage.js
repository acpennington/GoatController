import React, { PureComponent } from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import { FaSave } from "react-icons/fa";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { checkToken } from "utils/authToken.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const backgrounds = ["Default.png", "Sorcerer_In_Space.png", "Thousand_Eyes_Goats.png"];

class SettingsPage extends PureComponent {
   constructor(props) {
      super(props);
      const settings = JSON.parse(window.sessionStorage.getItem("settings"));
      this.state = { settings, unsaved: false };
   }

   setbg = (bg) => {
      this.setState({ settings: { ...this.state.settings, gamebg: bg }, unsaved: true });
   };

   save = () => {
      if (this.state.unsaved) {
         window.sessionStorage.setItem("settings", JSON.stringify(this.state.settings));
         window.location.href = "/wall";
      }
   };

   render() {
      checkToken();

      const { classes, ...rest } = this.props;
      const { settings, unsaved } = this.state;
      const { gamebg } = settings;

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
                  backgroundImage: 'url("/backgrounds/' + gamebg + '")',
                  backgroundSize: "cover",
                  backgroundPosition: "center"
               }}
            >
               <div className={classes.container}>
                  <div style={{ marginTop: "-5vh", marginBottom: "-100%" }}>
                     <GridContainer justify="center">
                        <GridItem xs={12}>
                           <div style={{ textAlign: "center" }}>
                              <CustomDropdown
                                 buttonText={"Game Background: " + formatBg(gamebg)}
                                 buttonProps={{
                                    color: "transparent"
                                 }}
                                 dropdownList={[
                                    ...backgrounds.map((bg) => <div onClick={() => this.setbg(bg)}>{formatBg(bg)}</div>)
                                 ]}
                              />
                           </div>
                           <div style={{ textAlign: "center" }}>
                              <Button color="primary" size="lg" round href="/wall">
                                 <BsArrowLeftShort /> Back
                              </Button>
                              <Button color={unsaved && "primary"} size="lg" round onClick={this.save}>
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

function formatBg(gamebg) {
   return gamebg.split(".")[0].replace(/_/g, " ");
}

export default withStyles(styles)(SettingsPage);
