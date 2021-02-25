import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";

import compress from "utils/compressName.js";
import getCardDetails from "utils/getCardDetails.js";

class YugiohCardExpanded extends Component {
   render() {
      const { classes, hoverCard, selectedCard } = this.props;
      const cardName = hoverCard || (selectedCard && selectedCard.name) || false;

      if (!cardName) return <div className={classes.largePic}></div>;

      const { cardType, attribute, levelOrSubtype, atk, def, text } = getCardDetails(cardName);
      return (
         <div
            className={classes.largePic}
            style={{
               backgroundImage: 'url("/cards/large/' + compress(cardName) + '.jpg")'
            }}
         >
            <div className={classes.cardText}>
               {cardName} [{attribute || cardType}/{levelOrSubtype}]
               <br />
               {text}
               <br />
               {atk && "ATK " + atk + " / DEF " + def}
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { hoverCard: state.hoverCard, selectedCard: state.selectedCard };
}

export default connect(mapStateToProps, {})(withStyles(cardStyle)(YugiohCardExpanded));
