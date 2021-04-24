import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import { revealHand } from "stateStore/actions/field.js";

class RevealHand extends PureComponent {
   render() {
      const { revealHand, handRevealed } = this.props;

      return (
         <Button
            onClick={revealHand}
            style={
               handRevealed
                  ? {
                       backgroundImage:
                          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/InfiniteCards.jpg")',
                       backgroundPosition: "50% 15%"
                    }
                  : {
                       backgroundImage:
                          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/Ante.jpg")'
                    }
            }
         >
            {handRevealed ? "Stop Revealing" : "Reveal Hand"}
         </Button>
      );
   }
}

function mapStateToProps(state) {
   return { handRevealed: state.field.hero.handRevealed };
}

export default connect(mapStateToProps, { revealHand })(RevealHand);
