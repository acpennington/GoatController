import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import LeaguesMap from "./LeaguesMap.js";
import Button from "components/CustomButtons/Button.js";
import BackButton from "components/CustomButtons/BackButton.js";
import PageTemplate from "components/Header/PageTemplate.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Tooltip from "@material-ui/core/Tooltip";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { MdCreate } from "react-icons/md";

import apiErrors from "utils/apiErrors.js";
import { getAuthHeaders } from "utils/authToken.js";
import getApiStage from "utils/getApiStage.js";
import { API_URL } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/leagues.js";

class Leagues extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         joinExpanded: false,
         doneFetching: false,
         errors: false
      };
   }

   componentDidMount() {
      this.fetchLeaguesList();
   }

   fetchLeaguesList = async () => {
      const config = getAuthHeaders();

      const res = await axios.get(API_URL + getApiStage() + "/leagues", config);
      if (res.data.statusCode === 200) {
         const leaguesList = res.data.body;
         const yourLeagues = JSON.parse(window.sessionStorage.getItem("leagues"));
         this.yourLeagues = [];
         this.otherLeagues = [];
         for (const league of leaguesList)
            if (yourLeagues.includes(league.id)) this.yourLeagues.push(league);
            else this.otherLeagues.push(league);
         this.setState({ doneFetching: true });
      } else this.setState({ errors: apiErrors(res.data.body.errors) });
   };

   swapExpanded = () => this.setState({ joinExpanded: !this.state.joinExpanded });

   render() {
      const { classes } = this.props;
      const { joinExpanded, doneFetching, errors } = this.state;
      const { yourLeagues, otherLeagues } = this;

      if (errors)
         return (
            <PageTemplate>
               <div className={classes.center}>An unexpected error occurred while trying to fetch the list of all leagues: {errors}</div>
               <div className={classes.center}>Try refreshing the page. If this error continually occurs, please contact the developers of GoatDuels.com.</div>
            </PageTemplate>
         );

      return (
         <PageTemplate>
            <GridContainer>
               <GridItem xs={12}>
                  <div className={classes.center}>
                     <h3>Your Leagues</h3>
                     {doneFetching ? <LeaguesMap leagues={yourLeagues} color="success" /> : "Fetching list of your leagues..."}
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div className={classes.center}>
                     <Tooltip
                        id="leagues"
                        title={"Click to " + (joinExpanded ? "collapse list" : "show list of leagues")}
                        classes={{ tooltip: classes.tooltip }}
                        placement="top"
                     >
                        <h3 onClick={this.swapExpanded}>Join League {joinExpanded ? <ArrowDropDownIcon /> : <ArrowRightIcon />}</h3>
                     </Tooltip>
                     {joinExpanded && (
                        <div className={classes.leaguesList}>
                           {doneFetching ? <LeaguesMap leagues={otherLeagues} color="info" /> : "Fetching list of all leagues..."}
                        </div>
                     )}
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div className={classes.bottom}>
                     <BackButton />
                     <Button color="primary" size="lg" round href="/createleague">
                        <MdCreate /> Create League
                     </Button>
                  </div>
               </GridItem>
            </GridContainer>
         </PageTemplate>
      );
   }
}

Leagues.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Leagues);
