import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import EffectTooltips from "./EffectTooltips.js";
import compress from "utils/compressName.js";
import { splitArt } from "utils/splitArt.js";
import getCardDetails from "shared/getCardDetails.js";
import { FACEDOWN_CARD, NORMAL_MONSTER } from "shared/constants";

import { MdDescription } from "react-icons/md";

import { withStyles } from "@mui/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";

class YugiohCardExpanded extends PureComponent {
   render() {
      const { classes, hoverCard, selectedCard, height, width, noButtons } = this.props;
      const activeCard = selectedCard || hoverCard;
      const cardName = rename(activeCard);

      if (!cardName) return <div className={classes.largePic}></div>;

      const { cardType, attribute, levelOrSubtype, atk, def, text } = getCardDetails(cardName);
      const [name, art] = splitArt(cardName);

      return (
         <div
            className={classes.largePic}
            style={{
               backgroundImage: `url("/cards/art/${compress(name)}${art ? `.${art}` : ""}.jpg")`,
               height,
               width
            }}
         >
            <div className={classes.contentContainer}>
               {!noButtons && cardType !== NORMAL_MONSTER && (
                  <div className={classes.buttons}>
                     <Button color="primary">
                        <MdDescription />
                        Rulings
                     </Button>
                  </div>
               )}
               <div className={classes.cardText}>
                  <div>
                     <strong>{name}</strong> [{attribute || cardType}/{levelOrSubtype}]
                  </div>
                  <div className={classes.tooltipsBox}>
                     <EffectTooltips text={text} />
                  </div>
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
   classes: PropTypes.object.isRequired
};

export default withStyles(cardStyle)(YugiohCardExpanded);
