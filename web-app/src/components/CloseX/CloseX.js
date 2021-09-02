import React, { Component } from "react";

class CloseX extends Component {
   shouldComponentUpdate() {
      return false;
   }

   render() {
      return <b style={{ position: "absolute", right: "5px", fontSize: "2em", top: "50%", transform: "translateY(-50%)" }}>&times;</b>;
   }
}

export default CloseX;
