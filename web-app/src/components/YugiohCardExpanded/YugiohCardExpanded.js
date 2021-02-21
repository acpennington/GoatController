import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardExpandedStyle.js";
import compress from "../../utils/compressName.js";

class YugiohCardExpanded extends Component {
   render() {
      const { classes, hoverCard, selectedCard } = this.props;
      const cardName = hoverCard || (selectedCard && selectedCard.name) || "";

      return (
         <div
            className={classes.largePic}
            style={{
               backgroundImage: 'url("/cards/large/' + compress(cardName) + '.jpg")'
            }}
         >
            <div className={classes.cardText}>
               {cardName} [Light/4]
               <br />
               Fairy/Effect – When this card is destroyed by battle and sent to the Graveyard: You can Special Summon 1
               LIGHT monster with 1500 or less ATK from your Deck, in face-up Attack Position.
               <br />
               ATK 1400 / DEF 800
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { hoverCard: state.hoverCard, selectedCard: state.selectedCard };
}

export default connect(mapStateToProps, {})(withStyles(cardStyle)(YugiohCardExpanded));
