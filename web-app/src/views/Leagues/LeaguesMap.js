import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

class LeaguesMap extends PureComponent {
   render() {
      const { classes, leagues } = this.props;

      return leagues.map((league, index) => (
         <Tooltip id={league.name} title={league.description} classes={{ tooltip: classes.tooltip }}>
            <Button color="success" size="lg" href={"/league?id=" + league.id} key={index}>
               {league.name}
            </Button>
         </Tooltip>
      ));
   }
}

LeaguesMap.propTypes = {
   classes: PropTypes.object.isRequired,
   leagues: PropTypes.array.isRequired
};

export default withStyles(styles)(LeaguesMap);
