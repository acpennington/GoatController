import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";
import Button from "components/CustomButtons/Button.js";

import { Description } from "@material-ui/icons";

import CardScript from "./CardScript.js";
import compress from "utils/compressName.js";
import getCardDetails from "utils/getCardDetails.js";
import { HERO, FACEDOWN_CARD, SEARCH_DECK, BANISH_ALL } from "utils/constants";

class YugiohCardExpanded extends PureComponent {
   render() {
      const { classes, hoverCard, selectedCard, height, width, noButtons } = this.props;
      const activeCard = selectedCard || hoverCard;
      const player = activeCard && activeCard.player;
      const cardName = rename(activeCard);

      if (!cardName) return <div className={classes.largePic}></div>;

      const { cardType, attribute, levelOrSubtype, atk, def, text, script } = getCardDetails(cardName);
      const scriptName = script && script.split(":")[0];

      return (
         <div
            className={classes.largePic}
            style={{
               backgroundImage: 'url("/cards/art/' + compress(cardName) + '.jpg")',
               height,
               width
            }}
         >
            <div className={classes.contentContainer}>
               {!noButtons && (
                  <div className={classes.buttons}>
                     {script && validScript(player, scriptName) && <CardScript script={script} />}
                     {text.includes("/Flip/") && (
                        <CardScript script={BANISH_ALL} variant="Nobleman of Crossout" activeCard={activeCard} />
                     )}
                     <Button color="primary">
                        <Description />
                        Rulings
                     </Button>
                  </div>
               )}
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

function validScript(player, scriptName) {
   return player === HERO || scriptName !== SEARCH_DECK;
}

function rename(card) {
   return card && card.name !== FACEDOWN_CARD && card.name;
}

YugiohCardExpanded.propTypes = {
   hoverCard: PropTypes.string,
   selectedCard: PropTypes.object,
   height: PropTypes.string,
   width: PropTypes.string,
   noButtons: PropTypes.bool
};

export default withStyles(cardStyle)(YugiohCardExpanded);
