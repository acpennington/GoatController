import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import JoinLeaveButton from "./JoinLeaveButton.js";
import BackButton from "components/CustomButtons/BackButton.js";
import PageTemplate from "components/Header/PageTemplate.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { decodeQuery } from "./utils.js";
import { getAuthHeaders } from "utils/authToken.js";
import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import { API_URL, OFFICIAL_UNRANKED } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/leagues.js";

const LOADING = "Loading league...";

class LeaguePage extends PureComponent {
   constructor(props) {
      super(props);

      this.leagueId = decodeQuery() || OFFICIAL_UNRANKED.id;
      this.state = {
         name: this.leagueId === OFFICIAL_UNRANKED.id ? OFFICIAL_UNRANKED.name : LOADING
      };
   }

   componentDidMount() {
      if (this.state.name === LOADING) this.fetchLeague();
   }

   fetchLeague = async () => {
      const config = { headers: getAuthHeaders() };

      const res = await axios.get(API_URL + getApiStage() + "/leagues?id=" + this.leagueId, config);
      if (res.data.statusCode === 200) {
         const league = res.data.body;
         this.setState({ ...league });
      } else this.setState({ name: "Error: " + apiErrors(res.data.body.errors) });
   };

   render() {
      const { classes } = this.props;
      const { name, description } = this.state;
      const { leagueId } = this;
      const yourLeagues = JSON.parse(window.sessionStorage.getItem("leagues"));

      return (
         <PageTemplate>
            <GridContainer justify="center">
               <GridItem xs={12}>
                  <div className={classes.center}>
                     <h3>{name}</h3>
                     {description && <h4>{description}</h4>}
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div className={classes.center}>
                     <BackButton href="leagues" />
                     <JoinLeaveButton leave={yourLeagues.includes(leagueId)} />
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
