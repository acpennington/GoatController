import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import RenderCards from "components/RenderCards/RenderCards.js";
import checkParams from "utils/checkParams.js";
import { closeModal } from "stateStore/actions/shared/settings.js";
import { WebSocketContext } from "views/Game/WebSocketContext";

class CardsToRender extends Component {
   componentDidUpdate(prevProps, prevState) {
      const { autoClose, row, player, closeModal } = this.props;
      const { zoneLen } = this.state;
      const lastRow = prevProps.row;
      const lastZoneLen = prevState.zoneLen;

      if (zoneLen === 0 || (autoClose && lastZoneLen !== zoneLen && lastRow === row)) closeModal(row, player, this.context);
   }

   filterZones = () => {
      const { cardsLen, filter, cards, oneParam } = this.props;

      let zoneNumbers = [];
      for (let i = 0; i < cardsLen; i++) zoneNumbers.push(i);

      if (filter)
         zoneNumbers = zoneNumbers.filter((numb) => {
            const card = cards[numb];
            const { fail, pass } = checkParams(card, filter);
            return oneParam ? pass.length > 0 : fail.length === 0;
         });

      return zoneNumbers;
   };

   updateResults = () => {
      const { cardNames } = this.props;
      const zoneNumbers = this.filterZones();
      const cardsToRender = [];

      // eslint-disable-next-line
      this.state = { zoneLen: zoneNumbers.length };
      const { zoneLen } = this.state;

      for (let i = zoneLen - 1; i >= 0; i -= 1) {
         const card = { zone: zoneNumbers[i] };
         if (cardNames) card.name = cardNames[i];
         cardsToRender.push(card);
      }

      return cardsToRender;
   };

   render() {
      const { height, player, row, maxHeight, isHero } = this.props;
      const cardsToRender = this.updateResults();
      const { zoneLen } = this.state;

      return (
         <FriendlyScroll id={"modal" + player + row} count={zoneLen} flexDirection="column" style={{ maxHeight: maxHeight + "px" }}>
            <RenderCards cardsToRender={cardsToRender} maxHeight={maxHeight} cardHeight={height} player={player} row={row} isHero={isHero} />
         </FriendlyScroll>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const { player, row, cardNames, filter } = ownProps;
   const cards = filter && state.field[player][row];
   const cardsLen = cardNames ? cardNames.length : state.field[player][row].length;
   return { cards, cardsLen };
}

CardsToRender.propTypes = {
   cardsLen: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   cardNames: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
   maxHeight: PropTypes.number.isRequired,
   filter: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
   isHero: PropTypes.bool.isRequired,
   autoClose: PropTypes.bool.isRequired,
   oneParam: PropTypes.bool,
   closeModal: PropTypes.func.isRequired,
   cards: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
};

CardsToRender.contextType = WebSocketContext;

export default connect(mapStateToProps, { closeModal })(CardsToRender);
