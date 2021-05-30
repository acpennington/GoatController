import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import Tooltip from "@material-ui/core/Tooltip";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";

class EffectTooltips extends PureComponent {
   render() {
      const { text, classes } = this.props;

      let rtn = [];
      let remainingText = text;

      let id = 0;
      while (remainingText.includes("<effect=")) {
         const splitString = remainingText.split("<effect=");
         const firstPart = splitString.shift();
         splitString.join("<effect=");
         if (firstPart) rtn.push(<Fragment key={id++}>{firstPart}</Fragment>);

         const secondSplit = splitString.join("<effect=").split("</effect>");
         const secondPart = secondSplit.shift();
         const thirdPart = secondSplit.join("</effect>");

         const [effectType, effectText] = secondPart.split(">");
         if (effectText)
            rtn.push(
               <Tooltip title={effectType + " Effect"} classes={{ tooltip: classes.tooltip }} key={id++}>
                  <span className={classes.underhover}>{effectText}</span>
               </Tooltip>
            );
         remainingText = thirdPart;
      }

      if (remainingText) rtn.push(<Fragment key={id++}>{remainingText}</Fragment>);
      return rtn;
   }
}

EffectTooltips.propTypes = {
   text: PropTypes.string.isRequired
};

export default withStyles(cardStyle)(EffectTooltips);
