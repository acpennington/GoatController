import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import EffectTooltips from "./EffectTooltips.js";
import CardScript from "./CardScript.js";
import compress from "utils/compressName.js";
import getCardDetails from "utils/getCardDetails.js";
import { FACEDOWN_CARD, SEARCH_DECK, BANISH_ALL } from "utils/constants";

import { Description } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";

class YugiohCardExpanded extends PureComponent {
   validScript = (player, scriptName) => {
      return player === this.props.heroPlayer || scriptName !== SEARCH_DECK;
   };

   render() {
      const { classes, hoverCard, selectedCard, height, width, noButtons, heroPlayer } = this.props;
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
                     <Button color="primary">
                        <Description />
                        Rulings
                     </Button>
                     {script && this.validScript(player, scriptName) && <CardScript script={script} heroPlayer={heroPlayer} />}
                     {text.includes("/Flip/") && (
                        <CardScript script={BANISH_ALL} variant="Nobleman of Crossout" activeCard={activeCard} heroPlayer={heroPlayer} />
                     )}
                  </div>
               )}
               <div className={classes.cardText}>
                  <div><strong>{cardName}</strong> [{attribute || cardType}/{levelOrSubtype}]</div>
                  <div style={{margin: "2px 0", lineHeight: "1.3em"}}><EffectTooltips text={text} /></div>
                  <div>{attribute && `ATK ${atk} / DEF ${def}`}</div>
               </div>
            </div>
         </div>
      );
   }
}

function rename(card) {
   return card && card.name !== FACEDOWN_CARD && card.name;
}

YugiohCardExpanded.propTypes = {
   hoverCard: PropTypes.object,
   selectedCard: PropTypes.object,
   height: PropTypes.string,
   width: PropTypes.string,
   noButtons: PropTypes.bool,
   heroPlayer: PropTypes.string.isRequired
};

export default withStyles(cardStyle)(YugiohCardExpanded);
