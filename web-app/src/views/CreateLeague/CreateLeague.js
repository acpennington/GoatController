import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import BackButton from "components/CustomButtons/BackButton.js";
import PageTemplate from "components/Header/PageTemplate.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Info from "components/Info/Info.js";

import Tooltip from "@material-ui/core/Tooltip";
import Switch from "@material-ui/core/Switch";
import YouTube from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FaSave, FaTwitch } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const charMax = { name: 30, description: 60 };
const requiredFields = ["info", "config", "ratings"];

function validUrl(url) {
   try {
      new URL(url);
   } catch {
      return false;
   }
   return true;
}

class CreateLeague extends PureComponent {
   constructor(props) {
      super(props);

      this.state = {
         badFields: {
            info: [],
            social: [],
            config: []
         },
         name: "",
         description: "",
         website: "",
         discord: "",
         twitch: "",
         youtube: "",
         useQueue: true,
         useRatings: true,
         allowMultis: true,
         autoApprove: true
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

   setUseQueue = (event) => this.setState({ useQueue: event.target.checked });
   setUseRatings = (event) => this.setState({ useRatings: event.target.checked });
   setAllowMultis = (event) => this.setState({ allowMultis: event.target.checked });
   setAutoApprove = (event) => this.setState({ autoApprove: event.target.checked });

   getError = (fieldName) => {
      switch (fieldName) {
         case "name":
            return "The maximum number of characters allowed for name is " + charMax.name + ".";
         case "description":
            return "The maximum number of characters allowed for description is " + charMax.description + ".";
         case "website":
            return "Invalid website URL. It should look similar to https://domain.com.";
         case "discord":
            return 'Discord URL should start with "https" and contain "discord" in it.';
         case "youtube":
            return 'YouTube URL should start with "https" and contain "youtube.com" in it.';
         case "twitch":
            return 'Twitch URL should start with "https" and contain "twitch.tv" in it.';
         default:
            return "Unknown";
      }
   };

   getFooter = (footerName) => {
      const badFields = this.state.badFields[footerName];
      const badLength = badFields.length;

      if (badLength === 0) return "All of these fields are " + (requiredFields.includes(footerName) ? "required" : "optional") + ".";
      else if (badLength === 1) return "Error: " + this.getError(badFields[0]);
      else return "Errors: " + badFields.map((field) => this.getError(field)).join(" ");
   };

   render() {
      const { classes } = this.props;
      const { badFields, name, description, website, discord, twitch, youtube, useQueue, useRatings, allowMultis, autoApprove } = this.state;

      const infoFooter = this.getFooter("info");
      const socialFooter = this.getFooter("social");

      const canSave = name.length > 0 && description.length > 0 && badFields.info.length === 0 && badFields.social.length === 0;

      return (
         <PageTemplate>
            <GridContainer justify="center">
               <GridItem xs={12}>
                  <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Create a New League</h3>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  <Card style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                     <form className={classes.form}>
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
                                 onChange: (event) => this.setInfos({ name: event.target.value })
                              }}
                           />
                           <CustomInput
                              labelText="Short Description"
                              id="description"
                              formControlProps={{ fullWidth: true }}
                              inputProps={{
                                 type: "text",
                                 defaultValue: description,
                                 onChange: (event) => this.setInfos({ description: event.target.value })
                              }}
                           />
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
                     </form>
                  </Card>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  <Card style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                     <form className={classes.form}>
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
                        </CardBody>
                     </form>
                  </Card>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  <Card style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                     <form className={classes.form}>
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
                     </form>
                  </Card>
               </GridItem>
               <GridItem xs={12} sm={6}>
                  {useRatings && (
                     <Card style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                        <form className={classes.form}>
                           <CardHeader color="primary" className={classes.cardHeader}>
                              <h4>Ratings/Rankings System</h4>
                           </CardHeader>
                        </form>
                     </Card>
                  )}
               </GridItem>
               <GridItem xs={12}>
                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                     <BackButton href="leagues" />
                     <Tooltip
                        title={
                           canSave
                              ? "Note: It costs 5 Goat Gold every 30 days to keep your league. Your first 30 days is free. You can ask for donations from your leagues members to help pay the cost."
                              : "Make sure that all required fields are filled out and there are no errors."
                        }
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                     >
                        <Button color={canSave && "primary"} size="lg" round>
                           <FaSave /> Save and Create
                        </Button>
                     </Tooltip>
                     <h5 style={{ backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "8px", padding: "5px" }}>
                        <strong>Note:</strong> It costs 5 Goat Gold every 30 days to keep your league. Your first 30 days is free. You can ask for donations
                        from your leagues members to help pay the cost.
                     </h5>
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
