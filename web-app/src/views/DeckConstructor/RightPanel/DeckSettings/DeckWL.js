import React, { PureComponent, Fragment } from "react";
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

export default connect(mapStateToProps)(DeckWL);
