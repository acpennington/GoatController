import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

class Counters extends PureComponent {
   componentDidMount() {
      bind("=", () => this.tryAdjustCounters(1));
      bind("-", () => this.tryAdjustCounters(-1));
   }

   componentWillUnmount() {
      unbind(["=", "-"]);
   }

   tryAdjustCounters = (count) => {};

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

function mapStateToProps(state) {
   return { selectedCard: "" };
}

Counters.contextType = WebSocketContext;

export default connect(mapStateToProps)(Counters);
