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

      const unrankedId = OFFICIAL_UNRANKED.id;
      this.leagueId = decodeQuery() || unrankedId;
      this.state = {
         name: this.leagueId === unrankedId ? OFFICIAL_UNRANKED.name : LOADING
      };
   }

   componentDidMount() {
      if (this.state.name === LOADING) this.fetchLeague();
   }

   fetchLeague = async () => {
      const config = getAuthHeaders();

      const res = await axios.get(API_URL + getApiStage() + "/leagues?id=" + this.leagueId, config);
      if (res.data.statusCode === 200) {
         const league = res.data.body;
         this.setState({ ...league });
      } else this.setState({ name: "Error: " + apiErrors(res.data.body.errors) });
   };

   render() {
      const { classes } = this.props;
      const { name, description, pending } = this.state;
      const { leagueId } = this;
      const leave = !pending && JSON.parse(window.sessionStorage.getItem("leagues").includes(leagueId));

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
                     {leagueId !== OFFICIAL_UNRANKED.id && <JoinLeaveButton leagueId={leagueId} pending={pending} leave={leave} />}
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
