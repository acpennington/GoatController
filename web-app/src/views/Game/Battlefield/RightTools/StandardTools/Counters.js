import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";
import { adjustCounters } from "stateStore/actions/game/field";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { onField } from "utils/constants";

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
         <Fragment>
            <Button color="primary" round onClick={() => this.tryAdjustCounters(1)}>
               <FaPlusCircle color="green" size="2em" /> Add Counter
            </Button>
            <Button color="primary" round onClick={() => this.tryAdjustCounters(-1)}>
               <FaMinusCircle color="yellow" size="2em" /> Remove Counter
            </Button>
         </Fragment>
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
