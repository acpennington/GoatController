import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Button from "components/CustomButtons/Button.js";
import BackButton from "components/CustomButtons/BackButton.js";
import PageTemplate from "components/Header/PageTemplate.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardForm from "components/Card/CardForm.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Info from "components/Info/Info.js";
import { validUrl, getError, nameToId, deleteAttributes } from "./utils.js";

import Tooltip from "@material-ui/core/Tooltip";
import Switch from "@material-ui/core/Switch";
import YouTube from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FaSave, FaTwitch } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { MdCreate } from "react-icons/md";

import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import { getAuthHeaders } from "utils/authToken.js";
import { API_URL } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const charMax = { name: 30, description: 60 };
const requiredFields = ["info", "ratings"];

class CreateLeague extends PureComponent {
   constructor(props) {
      super(props);

      this.state = {
         badFields: {
            info: [],
            social: [],
            ratings: []
         },
         errors: "test",
         name: "",
         description: "",
         website: "",
         discord: "",
         twitch: "",
         youtube: "",
         useQueue: true,
         useRatings: true,
         allowMultis: true,
         autoApprove: true,
         allowExarion: false,
         center: "800",
         kvalue: "24",
         decay: "0.3",
         newPlayerBonus: false
      };
   }

   setInfos = (updates) => {
      const { name, description, badFields } = { ...this.state, ...updates };
      const badInfoFields = [];

      if (name.length > charMax.name) badInfoFields.push("name");
      if (description.length > charMax.description) badInfoFields.push("description");

      this.setState({ badFields: { ...badFields, info: badInfoFields }, ...updates });
   };

   setSocials = (updates) => {
      const { website, discord, youtube, twitch, badFields } = { ...this.state, ...updates };
      const badSocialFields = [];

      if (website.length > 0 && !validUrl(website)) badSocialFields.push("website");
      if (discord.length > 0 && (!discord.includes("discord") || !discord.includes("https"))) badSocialFields.push("discord");
      if (youtube.length > 0 && (!youtube.includes("youtube.com") || !youtube.includes("https"))) badSocialFields.push("youtube");
      if (twitch.length > 0 && (!twitch.includes("twitch.tv") || !twitch.includes("https"))) badSocialFields.push("twitch");

      this.setState({ badFields: { ...badFields, social: badSocialFields }, ...updates });
   };

   setRatings = (updates) => {
      const { center, kvalue, decay, badFields } = { ...this.state, ...updates };
      const badRatingsFields = [];

      if (center.length > 0 && isNaN(center)) badRatingsFields.push("center");
      if (kvalue.length > 0 && (isNaN(kvalue) || Number(kvalue) < 0)) badRatingsFields.push("kvalue");
      if (decay.length > 0 && (isNaN(decay) || Number(decay) < 0 || Number(decay) > 100)) badRatingsFields.push("decay");

      this.setState({ badFields: { ...badFields, ratings: badRatingsFields }, ...updates });
   };

   setUseQueue = (event) => this.setState({ useQueue: event.target.checked });
   setUseRatings = (event) => this.setState({ useRatings: event.target.checked });
   setAllowMultis = (event) => this.setState({ allowMultis: event.target.checked });
   setAutoApprove = (event) => this.setState({ autoApprove: event.target.checked });
   setAllowExarion = (event) => this.setState({ allowExarion: event.target.checked });
   setNewPlayerBonus = (event) => this.setState({ newPlayerBonus: event.target.checked });

   getFooter = (footerName) => {
      const badFields = this.state.badFields[footerName];
      const badLength = badFields.length;

      if (badLength === 0) return "All of these fields are " + (requiredFields.includes(footerName) ? "required" : "optional") + ".";
      else if (badLength === 1) return "Error: " + getError(badFields[0]);
      else return "Errors: " + badFields.map((field) => getError(field)).join(" ");
   };

   save = async () => {
      const config = { headers: getAuthHeaders() };
      const body = { ...this.state };

      deleteAttributes(body, ["badFields", "errors"]);
      const id = nameToId(body.name);
      body.id = id;
      if (!body.useRatings) deleteAttributes(body, ["center", "kvalue", "decay", "newPlayerBonus"]);

      const res = await axios.post(API_URL + getApiStage() + "/leagues", body, config);
      if (res.data.statusCode === 200) window.location.href = "/league?id=" + id;
      else this.setState({ errors: apiErrors(res.data.body.errors) });
   };

   render() {
      const { classes } = this.props;
      const {
         badFields,
         name,
         description,
         website,
         discord,
         twitch,
         youtube,
         useQueue,
         useRatings,
         allowMultis,
         autoApprove,
         allowExarion,
         center,
         kvalue,
         decay,
         newPlayerBonus
      } = this.state;

      const infoFooter = this.getFooter("info");
      const socialFooter = this.getFooter("social");
      const ratingsFooter = this.getFooter("ratings");

      const canSave =
         name.length > 0 &&
         description.length > 0 &&
         badFields.info.length === 0 &&
         badFields.social.length === 0 &&
         (!useRatings || (badFields.ratings.length === 0 && center.length > 0 && kvalue.length > 0 && decay.length > 0));

      return (
         <PageTemplate>
            <GridContainer justify="center">
               <GridItem xs={12}>
                  <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Create a New League</h3>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  <CardForm classes={classes} style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                     <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>Basic Info</h4>
                     </CardHeader>
                     <CardBody>
                        <CustomInput
                           labelText="Name"
                           id="name"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "text",
                              defaultValue: name,
                              onChange: (event) => this.setInfos({ name: event.target.value }),
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <MdCreate className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                        <CustomInput
                           labelText="Short Description"
                           id="description"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "text",
                              defaultValue: description,
                              onChange: (event) => this.setInfos({ description: event.target.value }),
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <MdCreate className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                        <div style={{ marginTop: "20px", textAlign: "center" }}>
                           <b>Your league ID will be:</b> {nameToId(name) || "(enter name above to find out)"}
                        </div>
                     </CardBody>
                     <CardFooter
                        className={classes.cardFooter}
                        style={{
                           textAlign: "center",
                           padding: "0.9375rem 1.875rem",
                           color: infoFooter.startsWith("Error") || name.length === 0 || description.length === 0 ? "red" : "black"
                        }}
                     >
                        {infoFooter}
                     </CardFooter>
                  </CardForm>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  <CardForm classes={classes} style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                     <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>Configuration</h4>
                     </CardHeader>
                     <CardBody>
                        <Switch checked={useQueue} onChange={this.setUseQueue} color="primary" style={{ color: "#9c27b0" }} />
                        Use {useQueue ? "queue" : "host/join"} for matchmaking
                        <Info
                           content={
                              useQueue
                                 ? "With a queue system, once two players are in the queue, they are matched with each other. Players who do not know who is already in the queue."
                                 : "With a host system, players host matches and wait for someone to join. The host can accept or decline each challenger."
                           }
                        />
                        <br />
                        <Switch checked={useRatings} onChange={this.setUseRatings} color="primary" style={{ color: "#9c27b0" }} />
                        {useRatings ? "Use a ratings/rankings system" : "No ratings/rankings system"}
                        <br />
                        <Switch checked={allowMultis} onChange={this.setAllowMultis} color="primary" style={{ color: "#9c27b0" }} />
                        {allowMultis ? "Allow" : "Ban"} multiaccounting
                        <Info
                           content={
                              allowMultis
                                 ? "The same person can join your league with multiple accounts."
                                 : "Block proxies, VPNs, and TOR. Log users' IP addresses."
                           }
                        />
                        <br />
                        <Switch checked={autoApprove} onChange={this.setAutoApprove} color="primary" style={{ color: "#9c27b0" }} />
                        {autoApprove ? "Auto-approve" : "Manually approve"} members
                        <Info
                           content={
                              autoApprove
                                 ? "Automatically approve any member who wishes to join your league."
                                 : "Members cannot play matches in your league until your manually approve them."
                           }
                        />
                        <br />
                        <Switch checked={allowExarion} onChange={this.setAllowExarion} color="primary" style={{ color: "#9c27b0" }} />
                        {allowExarion ? "Allow" : "Do not allow"} Exarion Universe
                        <Info content={"Exarion Universe is not TECHNICALLY a part of Goat Format, but some people prefer it to be legal."} />
                     </CardBody>
                  </CardForm>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  <CardForm classes={classes} style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                     <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>Social Media Links</h4>
                     </CardHeader>
                     <CardBody>
                        <CustomInput
                           labelText="Your Website"
                           id="website"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "text",
                              defaultValue: website,
                              onChange: (event) => this.setSocials({ website: event.target.value }),
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <LanguageIcon className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                        <CustomInput
                           labelText="Discord Invitation"
                           id="discord"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "text",
                              defaultValue: discord,
                              onChange: (event) => this.setSocials({ discord: event.target.value }),
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <SiDiscord className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                        <CustomInput
                           labelText="YouTube Channel"
                           id="discord"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "text",
                              defaultValue: youtube,
                              onChange: (event) => this.setSocials({ youtube: event.target.value }),
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <YouTube className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                        <CustomInput
                           labelText="Twitch Channel"
                           id="discord"
                           formControlProps={{ fullWidth: true }}
                           inputProps={{
                              type: "text",
                              defaultValue: twitch,
                              onChange: (event) => this.setSocials({ twitch: event.target.value }),
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <FaTwitch className={classes.inputIconsColor} />
                                 </InputAdornment>
                              )
                           }}
                        />
                     </CardBody>
                     <CardFooter
                        className={classes.cardFooter}
                        style={{
                           textAlign: "center",
                           padding: "0.9375rem 1.875rem",
                           color: socialFooter.startsWith("Error") ? "red" : "black"
                        }}
                     >
                        {socialFooter}
                     </CardFooter>
                  </CardForm>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  {useRatings && (
                     <CardForm classes={classes} style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                        <CardHeader color="primary" className={classes.cardHeader}>
                           <h4>Ratings/Rankings System</h4>
                        </CardHeader>
                        <CardBody style={{ textAlign: "center" }}>
                           <Info content={"This is the rating that all players start at. It is also the long-term average rating."} />
                           <b>Center: </b>
                           <CustomInput
                              id="center"
                              inputProps={{
                                 type: "text",
                                 defaultValue: center,
                                 onChange: (event) => this.setRatings({ center: event.target.value })
                              }}
                           />
                           <br />
                           <Info content={"The higher the k-value, the faster that players win and lose rating. Between 16 and 32 is recommended."} />
                           <b>K-value: </b>
                           <CustomInput
                              id="kvalue"
                              inputProps={{
                                 type: "text",
                                 defaultValue: kvalue,
                                 onChange: (event) => this.setRatings({ kvalue: event.target.value })
                              }}
                           />
                           <br />
                           <Info
                              content={
                                 "The percentage of their rating that a player loses each day. Enter 0 if you do NOT want any decay. Small values (less than 1) are recommended."
                              }
                           />
                           <b>Daily ratings decay %: </b>
                           <CustomInput
                              id="decay"
                              inputProps={{
                                 type: "text",
                                 defaultValue: decay,
                                 onChange: (event) => this.setRatings({ decay: event.target.value })
                              }}
                           />
                           <br />
                           <Switch checked={newPlayerBonus} onChange={this.setNewPlayerBonus} color="primary" style={{ color: "#9c27b0" }} />
                           {newPlayerBonus ? "Enable" : "Disable"} new player bonus
                           <Info
                              content={
                                 newPlayerBonus
                                    ? "New players will see their rating change twice as fast as normal. This effect will gradually wear off."
                                    : "Treats new players the same as everyone else, for the purpose of ratings."
                              }
                           />
                        </CardBody>
                        <CardFooter
                           className={classes.cardFooter}
                           style={{
                              textAlign: "center",
                              padding: "0.9375rem 1.875rem",
                              color: ratingsFooter.startsWith("Error") || center.length === 0 || kvalue.length === 0 || decay.length === 0 ? "red" : "black"
                           }}
                        >
                           {ratingsFooter}
                        </CardFooter>
                     </CardForm>
                  )}
               </GridItem>
               <GridItem xs={12}>
                  <div style={{ textAlign: "center", margin: "20px 0px" }}>
                     <BackButton href="leagues" />
                     <Tooltip
                        title={
                           canSave
                              ? "Note: It costs 5 Goat Gold every 30 days to keep your league. Your first 30 days is free. You can ask for donations from your league's members to help pay the cost."
                              : "Make sure that all required fields are filled out and there are no errors."
                        }
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                     >
                        <Button color={canSave && "primary"} size="lg" onClick={canSave ? this.save : undefined} round>
                           <FaSave /> Save and Create
                        </Button>
                     </Tooltip>
                  </div>
               </GridItem>
            </GridContainer>
         </PageTemplate>
      );
   }
}

CreateLeague.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateLeague);
