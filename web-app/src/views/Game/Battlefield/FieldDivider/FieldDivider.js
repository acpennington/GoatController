import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LifeBar from "./LifeBar.js";
import LPInputBox from "./LPInputBox.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";

class FieldDivider extends PureComponent {
   render() {
      const { classes, lifepoints, heroPlayer } = this.props;

      return (
         <div className={classes.fieldDivider}>
            <LifeBar life={lifepoints.hero} isHero={true} />
            <LPInputBox lifepoints={lifepoints.hero} heroPlayer={heroPlayer} />
            <LifeBar life={lifepoints.villain} isHero={false} />
         </div>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const name = ownProps.heroPlayer;
   const { field } = state;

   const lifepoints = {};
   for (const key in field)
      if (key === name) lifepoints.hero = field[key].lifepoints;
      else lifepoints.villain = field[key].lifepoints;

   return { lifepoints };
}

FieldDivider.propTypes = {
   classes: PropTypes.object.isRequired,
   heroPlayer: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(FieldDivider));
