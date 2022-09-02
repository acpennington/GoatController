import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMessage } from "stateStore/actions/game/chat.js";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";
import { undoDraw } from "stateStore/actions/game/field.js";

class UndoDrawButton extends Component {
   componentDidMount() {
      bind("u", this.maybeUndo);
   }

   componentWillUnmount() {
      unbind(["u"]);
   }

   shouldComponentUpdate() {
      return false;
   }

   maybeUndo = () => {
      const { heroPlayer, undoDraw, lastDrawn, lastDraw, addMessage } = this.props;

      if (!lastDrawn) {
         // NOTE: deliberately not passing this.context to addMessage as it only needs to be shown to the heroPlayer.
         addMessage("Game", lastDraw ? "The last card you drew is no longer in your hand." : "You have no more draws to undo.");
      } else {
         undoDraw(heroPlayer, this.context);
      }
   };

   render() {
      return (
         <Button
            onClick={this.maybeUndo}
            style={{
               backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/DropOff.jpg")',
               backgroundPosition: "50% 80%"
            }}
            round
         >
            Undo Draw
         </Button>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const lastDraw = state.field[ownProps.heroPlayer].lastDraw;
   let lastDrawn;
   for (const card of state.field[ownProps.heroPlayer].hand) {
      if (!card.notOwned && card.order === lastDraw) {
         lastDrawn = card;
         break;
      }
   }
   return { lastDrawn, lastDraw };
}

UndoDrawButton.propTypes = {
   heroPlayer: PropTypes.string.isRequired,
   undoDraw: PropTypes.func.isRequired,
   addMessage: PropTypes.func.isRequired,
   lastDraw: PropTypes.number,
   lastDrawn: PropTypes.object
};

UndoDrawButton.contextType = WebSocketContext;

export default connect(mapStateToProps, { undoDraw, addMessage })(UndoDrawButton);
