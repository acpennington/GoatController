import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DeckWL extends PureComponent {
   render() {
      const { wins, losses } = this.props;
      return (
         <Fragment>
            <h3>
               Wins: {wins}
               <br />
               Losses: {losses}
            </h3>
         </Fragment>
      );
   }
}

function mapStateToProps(state) {
   const { wins, losses } = state.decklist;
   return { wins, losses };
}

DeckWL.propTypes = {
   wins: PropTypes.number.isRequired,
   losses: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(DeckWL);
