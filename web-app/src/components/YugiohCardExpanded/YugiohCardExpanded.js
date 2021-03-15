import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";
import Button from "components/CustomButtons/Button.js";
import { Description } from "@material-ui/icons";

import compress from "utils/compressName.js";
import getCardDetails from "utils/getCardDetails.js";
import { FACEDOWN_CARD } from "utils/constants";

class YugiohCardExpanded extends PureComponent {
   render() {
      const { classes, hoverCard, selectedCard } = this.props;
      const cardName = rename(selectedCard, "name") || rename(hoverCard) || false;

      if (!cardName) return <div className={classes.largePic}></div>;

      const { cardType, attribute, levelOrSubtype, atk, def, text } = getCardDetails(cardName);
      return (
         <div
            className={classes.largePic}
            style={{
               backgroundImage: 'url("/cards/art/' + compress(cardName) + '.jpg")'
            }}
         >
            <div className={classes.contentContainer}>
               <div className={classes.buttons}>
                  <Button color="primary">
                     <Description />
                     Rulings
                  </Button>
               </div>
               <div className={classes.cardText}>
                  <strong>{cardName}</strong> [{attribute || cardType}/{levelOrSubtype}]
                  <br />
                  {text}
                  <br />
                  {attribute && "ATK " + atk + " / DEF " + def}
               </div>
            </div>
         </div>
      );
   }
}

function rename(card, prop = false) {
   return prop ? card && card[prop] !== FACEDOWN_CARD && card[prop] : card !== FACEDOWN_CARD && card;
}

function mapStateToProps(state) {
   return { hoverCard: state.hoverCard, selectedCard: state.selectedCard };
}

export default connect(mapStateToProps, {})(withStyles(cardStyle)(YugiohCardExpanded));
