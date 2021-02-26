import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";
import Button from "components/CustomButtons/Button.js";

import compress from "utils/compressName.js";
import getCardDetails from "utils/getCardDetails.js";

class YugiohCardExpanded extends Component {
   render() {
      const { classes, hoverCard, selectedCard } = this.props;
      const selectedCardName = selectedCard && selectedCard.name;
      const cardName = hoverCard || selectedCardName || false;

      if (!cardName) return <div className={classes.largePic}></div>;

      const showButtons = !hoverCard || hoverCard===selectedCardName
      const { cardType, attribute, levelOrSubtype, atk, def, text } = getCardDetails(cardName);
      return (
         <div
            className={classes.largePic}
            style={{
               backgroundImage: 'url("/cards/large/' + compress(cardName) + '.jpg")'
            }}
         >
            <div className={classes.contentContainer}>
               {showButtons && <div className={classes.buttons}><Button color="primary">Rulings</Button></div>}
               <div className={classes.cardText}>
                  <strong>{cardName}</strong> [{attribute || cardType}/{levelOrSubtype}]
                  <br />
                  {text}
                  <br />
                  {atk && "ATK " + atk + " / DEF " + def}
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { hoverCard: state.hoverCard, selectedCard: state.selectedCard };
}

export default connect(mapStateToProps, {})(withStyles(cardStyle)(YugiohCardExpanded));
