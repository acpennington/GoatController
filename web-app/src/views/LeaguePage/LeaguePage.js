import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Button from "components/CustomButtons/Button.js";
import BackButton from "components/CustomButtons/BackButton.js";
import PageTemplate from "components/Header/PageTemplate.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { decodeQuery } from "./utils.js";
import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import { API_URL, headers, OFFICIAL_UNRANKED } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/leagues.js";

const LOADING = "Loading league...";

class LeaguePage extends PureComponent {
   constructor(props) {
      super(props);

      this.leagueId = decodeQuery() || OFFICIAL_UNRANKED.id;
      this.state = {
         title: this.leagueId === OFFICIAL_UNRANKED.id ? OFFICIAL_UNRANKED.name : LOADING
      };
   }

   componentDidMount() {
      if (this.state.title === LOADING) this.fetchLeague();
   }

   fetchLeague = async () => {
      const config = { headers };

      const res = await axios.get(API_URL + getApiStage() + "/leagues?id=" + this.leagueId, config);
   };

   render() {
      const { classes } = this.props;
      const { title } = this.state;

      return (
         <PageTemplate>
            <GridContainer justify="center">
               <GridItem xs={12}>
                  <div className={classes.center}>
                     <h3>{title}</h3>
                  </div>
               </GridItem>
               <GridItem xs={12}>
                  <div className={classes.center}>
                     <BackButton href="leagues" />
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
