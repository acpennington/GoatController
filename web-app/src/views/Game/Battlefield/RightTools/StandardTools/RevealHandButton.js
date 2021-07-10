import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import { revealHand } from "stateStore/actions/field.js";

class RevealHand extends PureComponent {
   render() {
      const { revealHand, handRevealed, name } = this.props;

      return (
         <Button
            onClick={() => revealHand(name)}
            style={
               handRevealed
                  ? {
                       backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/InfiniteCards.jpg")',
                       backgroundPosition: "50% 15%"
                    }
                  : {
                       backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/cards/art/Ante.jpg")'
                    }
            }
         >
            {handRevealed ? "Stop Revealing" : "Reveal Hand"}
         </Button>
      );
   }
}

function mapStateToProps(state, ownProps) {
   return { handRevealed: state.field[ownProps.name] ? state.field[ownProps.name].handRevealed : false };
}

RevealHand.propTypes = {
   name: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { revealHand })(RevealHand);
