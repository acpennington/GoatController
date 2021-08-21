import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import Tooltip from "@material-ui/core/Tooltip";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";

class EffectTooltips extends PureComponent {
   render() {
      const { text, classes } = this.props;

      // NOTE: safe given we control all the card text as it comes the card database
      const br = s => <span dangerouslySetInnerHTML={{__html: s.replace(/●/g, '<br />●')}}></span>;

      let rtn = [];
      let remainingText = text;

      let id = 0;
      while (remainingText.includes("<effect=")) {
         const splitString = remainingText.split("<effect=");
         const firstPart = splitString.shift();
         splitString.join("<effect=");
         if (firstPart) rtn.push(<Fragment key={id++}>{br(firstPart)}</Fragment>);

         const secondSplit = splitString.join("<effect=").split("</effect>");
         const secondPart = secondSplit.shift();
         const thirdPart = secondSplit.join("</effect>");

         const [effectType, effectText] = secondPart.split(">");
         if (effectText) {
            const postfix = effectType === "Summon" ? " Condition" : effectType === "Condition" ? "" : " Effect";
            rtn.push(
               <Tooltip title={effectType + postfix} classes={{ tooltip: classes.tooltip }} key={id++}>
                  <span className={classes.underhover}>{br(effectText)}</span>
               </Tooltip>
            );
         }
         remainingText = thirdPart;
      }

      if (remainingText) rtn.push(<Fragment key={id++}>{br(remainingText)}</Fragment>);
      return rtn;
   }
}

EffectTooltips.propTypes = {
   text: PropTypes.string.isRequired
};

export default withStyles(cardStyle)(EffectTooltips);
