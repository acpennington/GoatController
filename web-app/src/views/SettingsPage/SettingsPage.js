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

import setBodyImage from "utils/setBodyImage.js";
import { getAuthHeaders, checkToken } from "utils/authToken.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
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
      setBodyImage(settings.gamebg);

      this.state = {
         settings,
         oldPassword: "",
         newPassword: "",
         newPasswordTwo: "",
         unsaved: false,
         requirePass: false,
         errors: false
      };
   }

   setBg = (gamebg) => {
      this.setState({ settings: { ...this.state.settings, gamebg }, unsaved: true });
      setBodyImage(gamebg);
   };

   setSleeves = (sleeves) => {
      this.setState({ settings: { ...this.state.settings, sleeves }, unsaved: true });
   };

   setEmail = (event) => {
      this.setState({
         settings: { ...this.state.settings, email: event.target.value },
         unsaved: true,
         requirePass: true
      });
   };

   setDiscord = (event) => {
      this.setState({
         settings: { ...this.state.settings, discord: event.target.value },
         unsaved: true,
         requirePass: true
      });
   };

   setOldPassword = (event) => {
      this.setState({ oldPassword: event.target.value });
   };

   setNewPassword = (event) => {
      this.setState({ newPassword: event.target.value, unsaved: true, requirePass: true });
   };

   setNewPasswordTwo = (event) => {
      this.setState({ newPasswordTwo: event.target.value, unsaved: true, requirePass: true });
   };

   save = async () => {
      const { settings, unsaved, requirePass, oldPassword, newPassword, newPasswordTwo } = this.state;
      if (unsaved && (!requirePass || oldPassword)) {
         if (settings.discord && !isDiscordValid(settings.discord))
            this.setState({
               errors: "Your discord name must end with a # and a 4-digit number. For example: ACP#1234."
            });
         else if (newPassword !== newPasswordTwo) this.setState({ errors: "New passwords do not match." });
         else {
            window.sessionStorage.setItem("settings", JSON.stringify(this.state.settings));

            const config = { headers: getAuthHeaders() };
            let body = { settings };
            if (oldPassword) body.oldPassword = oldPassword;
            if (newPassword) body.newPassword = newPassword;
            body = JSON.stringify(body);

            try {
               await axios.put("/api/users", body, config);
               window.location.href = "/wall";
            } catch (err) {
               const apiErrors = err.response.data.errors;
               let errorString = "";

               for (const error of apiErrors) errorString += error.msg + ". ";

               errorString = errorString.slice(0, -1);
               this.setState({ errors: errorString });
            }
         }
      }
   };

   render() {
      const { classes, ...rest } = this.props;
      const { settings, unsaved, requirePass, errors, oldPassword } = this.state;
      const { sleeves, email, discord, gamebg } = settings;

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
            <div
               className={classes.pageHeader}
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
                                       <div onClick={() => this.setBg(bg)}>{formatFileName(bg)}</div>
                                    ))
                                 ]}
                              />
                           </div>
                        </GridItem>
                        <GridItem xs={12}>
                           <div
                              style={{
                                 textAlign: "center",
                                 display: "flex",
                                 justifyContent: "center",
                                 marginBottom: "30px"
                              }}
                           >
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
                           <Card style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                              <form className={classes.form}>
                                 <CardHeader color="primary" className={classes.cardHeader}>
                                    <h4>Link Accounts</h4>
                                 </CardHeader>
                                 <CardBody>
                                    <CustomInput
                                       labelText="Email Address"
                                       id="email"
                                       formControlProps={{
                                          fullWidth: true
                                       }}
                                       inputProps={{
                                          type: "text",
                                          defaultValue: email,
                                          onChange: this.setEmail,
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <Email className={classes.inputIconsColor} />
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
                                          defaultValue: discord,
                                          onChange: this.setDiscord,
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <SiDiscord className={classes.inputIconsColor} />
                                             </InputAdornment>
                                          )
                                       }}
                                    />
                                 </CardBody>
                                 <CardFooter
                                    className={classes.cardFooter}
                                    style={{ textAlign: "center", padding: "0.9375rem 1.875rem" }}
                                 >
                                    It is highly recommended that you link at least one account so that you will be able
                                    to recover your password (if forgotten).
                                 </CardFooter>
                              </form>
                           </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                           <Card style={{ paddingBottom: "20px", backgroundColor: "rgba(255,255,255,0.92)" }}>
                              <form className={classes.form}>
                                 <CardHeader color="primary" className={classes.cardHeader}>
                                    <h4>Change Password</h4>
                                 </CardHeader>
                                 <CardBody>
                                    <CustomInput
                                       labelText="New Password"
                                       id="pass"
                                       formControlProps={{
                                          fullWidth: true
                                       }}
                                       inputProps={{
                                          type: "password",
                                          onChange: this.setNewPassword,
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                                             </InputAdornment>
                                          )
                                       }}
                                    />
                                    <CustomInput
                                       labelText="Retype New Password"
                                       id="pass2"
                                       formControlProps={{
                                          fullWidth: true
                                       }}
                                       inputProps={{
                                          type: "password",
                                          onChange: this.setNewPasswordTwo,
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                                             </InputAdornment>
                                          )
                                       }}
                                    />
                                    <CustomInput
                                       labelText={
                                          <span style={{ color: requirePass && !oldPassword && "red" }}>
                                             {"Current Password" + (requirePass ? " (Required)" : "")}
                                          </span>
                                       }
                                       id="pass3"
                                       formControlProps={{
                                          fullWidth: true
                                       }}
                                       inputProps={{
                                          type: "password",
                                          onChange: this.setOldPassword,
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <Icon className={classes.inputIconsColor}>lock_outline</Icon>
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
                              {errors && (
                                 <span style={{ color: "red" }}>
                                    {errors}
                                    <br />
                                 </span>
                              )}
                              <Button color="primary" size="lg" round href="/wall">
                                 <BsArrowLeftShort /> Back
                              </Button>
                              <Button
                                 color={unsaved && (!requirePass || oldPassword) && "primary"}
                                 size="lg"
                                 round
                                 onClick={this.save}
                              >
                                 <FaSave /> Save Settings
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

function isDiscordValid(discordName) {
   const splitName = discordName.split("#");
   return splitName.length === 2 && splitName[1].length === 4 && Number.isInteger(parseFloat(splitName[1]));
}

function formatFileName(fileName) {
   return fileName.split(".")[0].replace(/_/g, " ");
}

export default withStyles(styles)(SettingsPage);
