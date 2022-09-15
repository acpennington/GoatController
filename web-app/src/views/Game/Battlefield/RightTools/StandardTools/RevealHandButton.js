import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import { revealHand } from "stateStore/actions/game/field.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";
import { removeArt } from "utils/splitArt.js";
import { HAND } from "shared/constants";

class RevealHand extends PureComponent {
   render() {
      const { revealHand, hand, name } = this.props;

      return (
         <Button
            onClick={() => revealHand(name, hand, this.context)}
            style={
               hand
                  ? {
                       backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/InfiniteCards.jpg")',
                       backgroundPosition: "50% 15%"
                    }
                  : {
                       backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/Ante.jpg")'
                    }
            }
            round
         >
            {hand ? "Reveal Hand" : "Stop Revealing"}
         </Button>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const handRevealed = state.field[ownProps.name] && state.field[ownProps.name].handRevealed;
   return {
      hand: handRevealed ? null : state.field[ownProps.name][HAND].map(({ name }) => removeArt(name))
   };
}

RevealHand.propTypes = {
   name: PropTypes.string.isRequired,
   revealHand: PropTypes.func.isRequired,
   hand: PropTypes.array.isRequired
};

RevealHand.contextType = WebSocketContext;

export default connect(mapStateToProps, { revealHand })(RevealHand);
