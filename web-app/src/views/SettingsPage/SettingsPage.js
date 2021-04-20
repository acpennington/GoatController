import React, { PureComponent } from "react";
import axios from "axios";

import { BsArrowLeftShort } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import JustSleeves from "components/YugiohCard/JustSleeves";
import { getAuthHeaders, checkToken } from "utils/authToken.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import InputAdornment from "@material-ui/core/InputAdornment";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const backgrounds = ["Default.png", "Sorcerer_In_Space.png", "Thousand_Eyes_Goats.png"];
const sleeveChoices = ["goat.png", "exarion.png"];

class SettingsPage extends PureComponent {
   constructor(props) {
      super(props);
      checkToken();

      const settings = JSON.parse(window.sessionStorage.getItem("settings"));
      this.state = { settings, unsaved: false };
   }

   setbg = (gamebg) => {
      this.setState({ settings: { ...this.state.settings, gamebg }, unsaved: true });
   };

   setSleeves = (sleeves) => {
      this.setState({ settings: { ...this.state.settings, sleeves }, unsaved: true });
   };

   save = async () => {
      const { settings, unsaved } = this.state;
      if (unsaved) {
         window.sessionStorage.setItem("settings", JSON.stringify(this.state.settings));

         const config = { headers: getAuthHeaders() };
         console.log(JSON.stringify(config));
         const body = JSON.stringify({ settings });
         try {
            const res = await axios.put("/api/users", body, config);
            window.location.href = "/wall";
         } catch (err) {
            const apiErrors = err.response.data.errors;
            let errorString = "";

            for (const error of apiErrors) errorString += error.msg + ". ";

            errorString = errorString.slice(0, -1);
            console.log(errorString);
         }
      }
   };

   render() {
      const { classes, ...rest } = this.props;
      const { settings, unsaved } = this.state;
      const { gamebg, sleeves } = settings;

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
                                 buttonText={"Game Background: " + formatFileName(gamebg)}
                                 buttonProps={{
                                    color: "transparent"
                                 }}
                                 dropdownList={[
                                    ...backgrounds.map((bg) => (
                                       <div onClick={() => this.setbg(bg)}>{formatFileName(bg)}</div>
                                    ))
                                 ]}
                              />
                           </div>
                        </GridItem>
                        <GridItem xs={12}>
                           <div style={{ textAlign: "center", display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                              <div>
                                 <CustomDropdown
                                    buttonText={"Sleeves: " + formatFileName(sleeves)}
                                    buttonProps={{
                                       color: "transparent"
                                    }}
                                    dropdownList={[
                                       ...sleeveChoices.map((sleeve) => (
                                          <div onClick={() => this.setSleeves(sleeve)}>{formatFileName(sleeve)}</div>
                                       ))
                                    ]}
                                 />
                                 <JustSleeves height={250} sleeves={sleeves} />
                              </div>
                           </div>
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                           <Card style={{ paddingBottom: "20px", backgroundColor: "rgba(255,255,255,0.92)" }}>
                              <form className={classes.form}>
                                 <CardHeader color="primary" className={classes.cardHeader}>
                                    <h4>Account Recovery</h4>
                                 </CardHeader>
                                 <CardBody>
                                    <CustomInput
                                       labelText="Email"
                                       id="email"
                                       formControlProps={{
                                          fullWidth: true
                                       }}
                                       inputProps={{
                                          type: "text",
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <Email className={classes.inputIconsColor} />
                                             </InputAdornment>
                                          )
                                       }}
                                    />
                                    <CustomInput
                                       labelText="US Phone Number"
                                       id="phone"
                                       formControlProps={{
                                          fullWidth: true
                                       }}
                                       inputProps={{
                                          type: "text",
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <Phone className={classes.inputIconsColor} />
                                             </InputAdornment>
                                          )
                                       }}
                                    />
                                    <CustomInput
                                       labelText="Discord ID"
                                       id="discord"
                                       formControlProps={{
                                          fullWidth: true
                                       }}
                                       inputProps={{
                                          type: "text",
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <SiDiscord className={classes.inputIconsColor} />
                                             </InputAdornment>
                                          )
                                       }}
                                    />                                    
                                 </CardBody>
                              </form>
                           </Card>
                        </GridItem>                              
                        <GridItem xs={12}>
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

function formatFileName(fileName) {
   return fileName.split(".")[0].replace(/_/g, " ");
}

export default withStyles(styles)(SettingsPage);
