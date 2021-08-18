import React, { PureComponent } from "react";

import Switch from "@material-ui/core/Switch";

class Foil extends PureComponent {
   constructor(props) {
      super(props);

      const storage = window.localStorage;
      if (storage.getItem("foilOn") === null) storage.setItem("foilOn", true);

      this.state = { foilOn: storage.getItem("foilOn") === "true" };
   }

   flipFoil = (event) => {
      window.localStorage.setItem("foilOn", event.target.checked);
      this.setState({ foilOn: event.target.checked });
   };

   render() {
      const { foilOn } = this.state;

      return (
         <div>
            <Switch checked={foilOn} onChange={this.flipFoil} color="primary" style={{ color: "#9c27b0" }} />
            Foil {foilOn ? "On" : "Off"}
         </div>
      );
   }
}

export default Foil;
