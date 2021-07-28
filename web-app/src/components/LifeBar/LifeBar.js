import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/lifebarStyle.js";

class LifeBar extends PureComponent {
   render() {
      const { classes, life, isHero } = this.props;
      const width = (1 - Math.min(1, life / 8000)) * 100 + "%";
      return (
         <div className={classes["container" + (isHero ? "hero" : "villain")]}>
            <div className={classes.blackBar} style={{ width }}></div>
            <div className={classes.life}>{life}</div>
         </div>
      );
   }
}

LifeBar.propTypes = {
   life: PropTypes.number.isRequired,
   isHero: PropTypes.bool.isRequired
};

export default withStyles(styles)(LifeBar);
