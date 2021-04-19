import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

import { CARD_RATIO } from "utils/constants.js";

class JustSleeves extends PureComponent {
   render() {
      const { classes, height, sleeves } = this.props;

      return (
         <div
            className={classes.container}
            style={{
               width: Math.floor(height / CARD_RATIO),
               height,
               borderWidth: "3px",
               backgroundImage: 'url("/sleeves/' + sleeves + '")'
            }}
         ></div>
      );
   }
}

JustSleeves.propTypes = {
   height: PropTypes.number.isRequired,
   sleeves: PropTypes.string.isRequired
};

export default withStyles(cardStyle)(JustSleeves);
