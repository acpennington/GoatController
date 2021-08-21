import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Shadow from "components/Shadow/Shadow.js";
import Button from "components/CustomButtons/Button.js";
import MapStateToButtons from "./MapStateToButtons.js";
import QueueButton from "./QueueButton.js";
import JoinLeaveButton from "./JoinLeaveButton.js";
import BackButton from "components/CustomButtons/BackButton.js";
import PageTemplate from "components/Header/PageTemplate.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import getQueryParams from "utils/getQueryParams.js";
import { getAuthHeaders } from "utils/authToken.js";
import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import { API_URL, OFFICIAL_UNRANKED } from "shared/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/leaguePage.js";

const LOADING = "Loading league...";

class LeaguePage extends PureComponent {
   constructor(props) {
      super(props);

      const unrankedId = OFFICIAL_UNRANKED.id;
      this.leagueId = getQueryParams().id || unrankedId;
      this.state = {
         name: this.leagueId === unrankedId ? OFFICIAL_UNRANKED.name : LOADING,
         yourLeagues: [],
         canLeave: false,
         members: { count: 0, pending: false, isAdmin: false, isBanned: false }
      };
   }

   async componentDidMount() {
      if (this.state.name === LOADING) {
         await this.fetchLeague();
         this.updateCanLeave();
      } else this.setState({ description: OFFICIAL_UNRANKED.description, allowExarion: true, autoApprove: true, allowMultis: true, useQueue: false });
   }

   updateCanLeave = () => {
      const yourLeagues = JSON.parse(window.sessionStorage.getItem("leagues"));
      const canLeave = !this.state.members.pending && yourLeagues && yourLeagues.includes(this.leagueId);
      this.setState({ yourLeagues, canLeave });
   };

   fetchLeague = async () => {
      const config = getAuthHeaders();
      const res = await axios.get(API_URL + getApiStage() + "/leagues?id=" + this.leagueId, config);
      if (res.data.statusCode === 200) {
         const league = res.data.body;
         console.log(JSON.stringify(league));
         this.setState({ ...league });
      } else this.setState({ name: "Error: " + apiErrors(res.data.body.errors) });
   };

   getMatchmaking = () => {
      const { classes } = this.props;
      const { allowExarion, useQueue, canLeave } = this.state;

      return (
         <GridItem xs={12}>
            <div className={classes.matchmaking}>
               <Shadow>
                  <h3>Matchmaking: {useQueue ? "Queue" : "Host/Join"}</h3>
               </Shadow>
               {canLeave ? (
                  useQueue ? (
                     <QueueButton leagueId={this.leagueId} allowExarion={allowExarion}/>
                  ) : (
                     "A table of hosted matches will go here"
                  )
               ) : (
                  <Shadow>You must join this league and have your membership approved before you can play any matches.</Shadow>
               )}
            </div>
         </GridItem>
      );
   };

   getLeagueRules = () => {
      const { classes } = this.props;
      const { allowExarion, allowMultis, autoApprove, useRatings, center, kvalue, decay, newPlayerBonus } = this.state;

      return (
         <GridItem xs={12} sm={6}>
            <div className={classes.center}>
               <Card>
                  <CardHeader color="primary" className={classes.cardHeader}>
                     <h4>League Rules</h4>
                  </CardHeader>
                  <CardBody>
                     {allowMultis ? "Allows multiaccounting." : "Does not allow multiaccounting."}
                     <br />
                     {autoApprove ? "New members are automatically approved." : "Requires an admin to manually approve your membership."}
                     <br />
                     {allowExarion ? "Exarion Universe is legal for play." : "Exarion Universe is not allowed."}
                     {useRatings && (
                        <Fragment>
                           <br />
                           <br />
                           Ratings center {center}, k-value {kvalue}, daily decay {decay}%{newPlayerBonus ? ", new player bonus enabled." : "."}
                        </Fragment>
                     )}
                  </CardBody>
               </Card>
            </div>
         </GridItem>
      );
   };

   getSocialMedia = () => {
      const { classes } = this.props;
      const { discord, twitch, website, youtube } = this.state;
      if (!discord && !twitch && !website && !youtube) return null;

      return (
         <GridItem xs={12} sm={6}>
            <div className={classes.center}>
               <Card>
                  <CardHeader color="primary" className={classes.cardHeader}>
                     <h4>Social Media</h4>
                  </CardHeader>
                  <CardBody>
                     <MapStateToButtons state={{ discord, twitch, website, youtube }} />
                  </CardBody>
               </Card>
            </div>
         </GridItem>
      );
   };

   render() {
      const { classes } = this.props;
      const { name, description, logo, members, useRatings, canLeave, yourLeagues } = this.state;
      const { count, pending, isBanned, isAdmin } = members;
      const { leagueId, getMatchmaking, getLeagueRules, getSocialMedia, updateCanLeave } = this;

      return (
         <PageTemplate>
            <GridContainer>
               <GridItem xs={12}>
                  <div className={classes.center}>
                     <Shadow>
                        <h2>
                           {name} {logo && <img className={classes.logo} src={logo} alt={name + " Logo"} />}
                        </h2>
                        {description && (
                           <h4>
                              {description}
                              {count > 0 && " || " + count + " member" + (count === 1 ? "" : "s") + " in league"}
                           </h4>
                        )}
                     </Shadow>
                     {useRatings && (
                        <Button href={"/rankings?id=" + leagueId} color="info" size="lg" round>
                           View Rankings
                        </Button>
                     )}
                  </div>
               </GridItem>
               {name !== LOADING && (
                  <Fragment>
                     {getMatchmaking()}
                     {getLeagueRules()}
                     {getSocialMedia()}
                  </Fragment>
               )}
               <GridItem xs={12}>
                  <div className={classes.bottom}>
                     <BackButton href="leagues" />
                     {leagueId !== OFFICIAL_UNRANKED.id && !isBanned && !isAdmin && (
                        <JoinLeaveButton leagueId={leagueId} pending={pending} leave={canLeave} leagues={yourLeagues} update={updateCanLeave} />
                     )}
                     {isAdmin && (
                        <Button color="primary" size="lg" round href={"/admin?id=" + leagueId}>
                           Admin
                        </Button>
                     )}
                  </div>
               </GridItem>
            </GridContainer>
         </PageTemplate>
      );
   }
}

LeaguePage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeaguePage);
