import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";
import getCardDetails from "utils/getCardDetails.js";
import { closeModal } from "stateStore/actions/shared/settings.js";
import { WebSocketContext } from "views/Game/WebSocketContext";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

class RenderCards extends Component {
   componentDidUpdate(prevProps, prevState) {
      const { autoClose, row, player, closeModal } = this.props;
      const { zoneLen } = this.state;
      const lastRow = prevProps.row;
      const lastZoneLen = prevState.zoneLen;

      if (zoneLen === 0 || (autoClose && lastZoneLen !== zoneLen && lastRow === row)) closeModal(row, player, this.context);
   }

   filterZones = () => {
      const { cardsLen, filter, cards } = this.props;
      let zoneNumbers = [];
      for (let i = 0; i < cardsLen; i++) zoneNumbers.push(i);

      if (filter)
         zoneNumbers = zoneNumbers.filter((numb) => {
            const cardName = cards[numb].name;
            const cardDetails = getCardDetails(cardName);
            const filters = filter.split(",");

            for (const singleFilter of filters) {
               const operator = singleFilter.includes(">") ? ">" : singleFilter.includes("<") ? "<" : "=";
               const [deet, comparator] = singleFilter.split(operator);
               switch (operator) {
                  case ">":
                     if (!(cardDetails[deet] && cardDetails[deet] >= comparator)) return false;
                     break;
                  case "<":
                     if (!(cardDetails[deet] && cardDetails[deet] <= comparator)) return false;
                     break;
                  default:
                     if (!(cardDetails[deet] && cardDetails[deet] === comparator)) return false;
               }
            }
            return true;
         });

      return zoneNumbers;
   };

   render() {
      const { classes, cardsLen, height, player, row, cardNames, sub, isHero } = this.props;
      const zoneNumbers = this.filterZones();

      // eslint-disable-next-line
      this.state = { zoneLen: zoneNumbers.length };
      const { zoneLen } = this.state;

      const cardDivs = [];
      for (let i = zoneLen - 1; i >= 0; i -= 2) {
         cardDivs.push(
            <div className={classes.cards} key={i}>
               <YugiohCard
                  height={height}
                  player={player}
                  row={row}
                  zone={zoneNumbers[i]}
                  cardName={cardNames ? cardNames[i] : null}
                  notFull
                  modal
                  isHero={isHero}
               />
               {i !== 0 && (
                  <YugiohCard
                     height={height}
                     player={player}
                     row={row}
                     zone={zoneNumbers[i - 1]}
                     cardName={cardNames ? cardNames[zoneNumbers[i - 1]] : null}
                     notFull
                     modal
                     isHero={isHero}
                  />
               )}
            </div>
         );
      }

      return (
         <FriendlyScroll
            id={"modal" + player + row}
            count={zoneLen}
            flexDirection="column"
            style={{ overflowY: cardsLen > 12 ? "auto" : "hidden" }}
            contStyle={{ height: "calc(100% - " + sub + "px)" }}
         >
            {cardDivs}
         </FriendlyScroll>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const { player, row, filter, cardNames } = ownProps;
   const cards = filter && state.field[player][row];
   const cardsLen = cardNames ? cardNames.length : state.field[player][row].length;
   return { cards, cardsLen };
}

RenderCards.propTypes = {
   cardsLen: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   cardNames: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
   sub: PropTypes.number.isRequired,
   filter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
   isHero: PropTypes.bool.isRequired,
   autoClose: PropTypes.bool.isRequired
};

RenderCards.contextType = WebSocketContext;

export default connect(mapStateToProps, { closeModal })(withStyles(styles)(RenderCards));
