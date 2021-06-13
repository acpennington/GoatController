import React, { PureComponent } from "react";
import PropTypes from "prop-types";

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

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const officialUnranked = {
   id: "GoatsDuels_Official_Unranked",
   name: "GoatsDuels Official Unranked",
   description: "Set up some fun testing games with your friends here"
};

class Leagues extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         joinExpanded: false,
         leaguesList: false,
         yourLeagues: false
      };
   }

   componentDidMount() {
      // Make API call to the leagues database to get info on each league that the user is a member of
   }

   swapExpanded = () => {
      const { joinExpanded, leaguesList } = this.state;
      if (!joinExpanded && !leaguesList) this.fetchLeaguesList();
      this.setState({ joinExpanded: !joinExpanded });
   };

   fetchLeaguesList = async () => {};

   render() {
      const { classes } = this.props;
      const { joinExpanded, leaguesList, yourLeagues } = this.state;

      return (
         <PageTemplate>
            <GridContainer justify="center">
               <GridItem xs={12}>
                  <div style={{ textAlign: "center" }}>
                     <h3>Your Leagues</h3>
                     {yourLeagues ? <LeaguesMap leagues={yourLeagues} /> : "Fetching list of your leagues..."}
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div style={{ textAlign: "center" }}>
                     <Tooltip
                        id="leagues"
                        title={"Click to " + (joinExpanded ? "collapse list" : "show list of leagues")}
                        classes={{ tooltip: classes.tooltip }}
                        placement="top"
                     >
                        <h3 onClick={this.swapExpanded}>Join League {joinExpanded ? <ArrowDropDownIcon /> : <ArrowRightIcon />}</h3>
                     </Tooltip>
                     {joinExpanded && (
                        <div style={{ marginBottom: "10px" }}>{leaguesList ? <LeaguesMap leagues={leaguesList} /> : "Fetching list of all leagues..."}</div>
                     )}
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div style={{ textAlign: "center" }}>
                     <Button color="primary" size="lg" round href="/createleague">
                        <MdCreate /> Create League
                     </Button>
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                     <BackButton />
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
