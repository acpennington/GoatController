import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "components/Tooltip/PatchedTooltip.js";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

class LeaguesMap extends PureComponent {
   render() {
      const { classes, leagues, color } = this.props;

      return leagues.map((league, index) => (
         <Tooltip id={league.name} title={league.description} classes={{ tooltip: classes.tooltip }} key={index}>
            <Button color={color} size="lg" href={"/league?id=" + league.id}>
               {league.name}
            </Button>
         </Tooltip>
      ));
   }
}

LeaguesMap.propTypes = {
   classes: PropTypes.object.isRequired,
   leagues: PropTypes.array.isRequired,
   color: PropTypes.string.isRequired
};

export default withStyles(styles)(LeaguesMap);
