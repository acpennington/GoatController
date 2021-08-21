import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import ButtonRow from "components/CustomButtons/ButtonRow.js";
import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";
import { adjustCounters } from "stateStore/actions/game/field";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { onField } from "utils/constants.js";

class Counters extends Component {
   componentDidMount() {
      bind("=", () => this.tryAdjustCounters(1));
      bind("-", () => this.tryAdjustCounters(-1));
   }

   componentWillUnmount() {
      unbind(["=", "-"]);
   }

   shouldComponentUpdate() {
      return false;
   }

   tryAdjustCounters = (count) => {
      const { selectedCard, adjustCounters, heroPlayer } = this.props;
      if (selectedCard && onField.includes(selectedCard.row) && selectedCard.player === heroPlayer) {
         const { player, row, zone } = selectedCard;
         adjustCounters(player, row, zone, count, this.context);
      }
   };

   render() {
      return (
         <ButtonRow>
            <Button
               color="primary"
               round
               onClick={() => this.tryAdjustCounters(1)}
               fullWidth
               style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/RoyalMagicalLibrary.jpg")' }}
            >
               <FaPlusCircle color="green" size="2em" /> Count
            </Button>
            <Button
               color="primary"
               round
               onClick={() => this.tryAdjustCounters(-1)}
               fullWidth
               style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/BreakertheMagicalWarrior.jpg")' }}
            >
               <FaMinusCircle color="yellow" size="2em" /> Count
            </Button>
         </ButtonRow>
      );
   }
}

function mapStateToProps(state, ownProps) {
   return { selectedCard: state.selectedCard[ownProps.heroPlayer] };
}

Counters.propTypes = {
   heroPlayer: PropTypes.string.isRequired
};

Counters.contextType = WebSocketContext;

export default connect(mapStateToProps, { adjustCounters })(Counters);
