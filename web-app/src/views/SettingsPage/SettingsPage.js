import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import PageTemplate from "components/Header/PageTemplate";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import BackButton from "components/CustomButtons/BackButton.js";
import GenericFinder from "components/CardFinder/GenericFinder.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import JustSleeves from "components/YugiohCard/JustSleeves";
import CardForm from "components/Card/CardForm.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Foil from "components/Switches/Foil.js";

import { isDiscordValid, formatFileName } from "./utils.js";
import setBodyImage from "utils/setBodyImage.js";
import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import { getAuthHeaders } from "utils/authToken.js";
import { API_URL, backgrounds } from "shared/constants.js";

import { MdEmail, MdLockOutline } from "react-icons/md";
import InputAdornment from "@mui/material/InputAdornment";
import { FaSave } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/settingsPage.js";

const sleeveChoices = [
   "Default.png",
   "Abstract.png",
   "Black_And_White.png",
   "Black_Luster_Soldier.png",
   "Curse_of_Fiend.png",
   "Exarion.png",
   "Ghost_Dog.png",
   "Goat.png",
   "Hieroglyphs.png",
   "Lavitz.png",
   "My_Pokemans.png",
   "Slaying_the_Dragon.png",
   "Space_Canyon.png",
   "Underwater_Nun.png",
   "Weeb_Shit.png"
];

const IMG_URL = /^https?:\/\/.*\.(Pp][Nn][Gg]|[Jj][Pp][Ee]?[Gg])$/;

class SettingsPage extends PureComponent {
   constructor(props) {
      super(props);

      const settings = JSON.parse(window.sessionStorage.getItem("settings"));
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
      const settings = { ...this.state.settings, gamebg };
      window.sessionStorage.setItem("settings", JSON.stringify(settings));
      this.setState({ settings, unsaved: true });
      setBodyImage();
   };

   setBgUrl = (event) => {
      const url = event.target.value;
      if (IMG_URL.test(url)) {
         this.setBg(url);
      }
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

            const config = getAuthHeaders();
            let body = { settings };
            if (oldPassword) body.oldPassword = oldPassword;
            if (newPassword) body.newPassword = newPassword;
            body = JSON.stringify(body);

            const res = await axios.put(API_URL + getApiStage() + "/users", body, config);
            if (res.data.statusCode === 200) window.location.href = "/wall";
            else this.setState({ errors: apiErrors(res.data.body.errors) });
         }
      }
   };

   render() {
      const { classes } = this.props;
      const { settings, unsaved, requirePass, errors, oldPassword } = this.state;

      const sleeves = settings ? settings.sleeves : "Default.png";
      const email = settings ? settings.email : null;
      const discord = settings ? settings.discord : null;
      const gamebg = settings ? settings.gamebg : "Default.png";

      return (
         <PageTemplate>
            <GridContainer>
               <GridItem xs={12}>
                  <div className={classes.center}>
                     <div style={{ width: "50%", margin: "auto" }}>
                        <GenericFinder
                           value={gamebg}
                           options={backgrounds.map((bg) => {
                              return { name: formatFileName(bg), value: bg };
                           })}
                           onChange={this.setBg}
                        />
                     </div>
                     <CustomInput
                        labelText="Custom Background URL"
                        id="bgUrl"
                        white
                        labelProps={{ style: { left: "0.9em" } }}
                        formControlProps={{ style: { width: "50%" } }}
                        inputProps={{
                           type: "text",
                           defaultValue: gamebg.startsWith("http") ? gamebg : "",
                           onChange: this.setBgUrl
                        }}
                     />
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div className={classes.centerFlex}>
                     <div className={classes.center}>
                        <GenericFinder
                           value={formatFileName(sleeves)}
                           options={sleeveChoices.map((sleeve) => {
                              return { name: formatFileName(sleeve), value: sleeve };
                           })}
                           onChange={this.setSleeves}
                        />
                        <div className={classes.sleeves}>
                           <JustSleeves height={250} sleeves={sleeves} />
                        </div>
                     </div>
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div className={classes.center} style={{ marginBottom: "30px" }}>
                     <Foil />
                  </div>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  <CardForm classes={classes} style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                     <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>Link Accounts</h4>
                     </CardHeader>
                     <CardBody>
                        <CustomInput
                           labelText="Email Address"
                           id="email"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "text",
                              defaultValue: email,
                              onChange: this.setEmail,
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <MdEmail className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                        <CustomInput
                           labelText="Discord ID"
                           id="discord"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "text",
                              defaultValue: discord,
                              onChange: this.setDiscord,
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <SiDiscord size="1.25em" className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                     </CardBody>
                     <CardFooter className={classes.cardFooter}>
                        It is highly recommended that you link at least one account so that you will be able to recover your password (if forgotten).
                     </CardFooter>
                  </CardForm>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  <CardForm classes={classes} style={{ paddingBottom: "20px", backgroundColor: "rgba(255,255,255,0.92)" }}>
                     <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>Change Password</h4>
                     </CardHeader>
                     <CardBody>
                        <CustomInput
                           labelText="New Password"
                           id="pass"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "password",
                              onChange: this.setNewPassword,
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <MdLockOutline className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                        <CustomInput
                           labelText="Retype New Password"
                           id="pass2"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "password",
                              onChange: this.setNewPasswordTwo,
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <MdLockOutline className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                        <CustomInput
                           labelText={
                              <span style={{ color: requirePass && !oldPassword && "red" }}>{"Current Password" + (requirePass ? " (Required)" : "")}</span>
                           }
                           id="pass3"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "password",
                              onChange: this.setOldPassword,
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <MdLockOutline className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                     </CardBody>
                  </CardForm>
               </GridItem>
               <GridItem xs={12}>
                  <div className={classes.center}>
                     {errors && (
                        <Fragment>
                           <span style={{ color: "red" }}>{"ERROR: " + errors}</span>
                           <br />
                        </Fragment>
                     )}
                     <BackButton />
                     <Button color={unsaved && (!requirePass || oldPassword) && "primary"} size="lg" round onClick={this.save}>
                        <FaSave /> Save Settings
                     </Button>
                  </div>
               </GridItem>
            </GridContainer>
         </PageTemplate>
      );
   }
}

SettingsPage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SettingsPage);
