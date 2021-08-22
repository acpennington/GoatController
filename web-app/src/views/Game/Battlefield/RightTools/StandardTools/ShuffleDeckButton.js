import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";
import { shuffleDeck } from "stateStore/actions/game/field.js";

class ShuffleDeckButton extends Component {
   shouldComponentUpdate() {
      return false;
   }

   render() {
      const { heroPlayer, shuffleDeck } = this.props;

      return (
         <Button
            onClick={() => shuffleDeck(heroPlayer, this.context)}
            style={{
               backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/CardShuffle.jpg")',
               backgroundPosition: "50% 80%"
            }}
            round
         >
            Shuffle Deck
         </Button>
      );
   }
}

ShuffleDeckButton.propTypes = {
   heroPlayer: PropTypes.string.isRequired
};

ShuffleDeckButton.contextType = WebSocketContext;

export default connect(null, { shuffleDeck })(ShuffleDeckButton);
