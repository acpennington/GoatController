import React, { PureComponent } from "react";

import Switch from "@material-ui/core/Switch";

class Sound extends PureComponent {
   constructor(props) {
      super(props);

      const storage = window.localStorage;
      if (storage.getItem("soundOn") === null) storage.setItem("soundOn", true);

      this.state = { soundOn: storage.getItem("soundOn") === "true" };
   }

   flipSound = (event) => {
      window.localStorage.setItem("soundOn", event.target.checked);
      this.setState({ soundOn: event.target.checked });
   };

   render() {
      const { soundOn } = this.state;

      return (
         <div>
            <Switch checked={soundOn} onChange={(event) => this.flipSound(event)} color="primary" style={{ color: "#9c27b0" }} />
            Sound {soundOn ? "On" : "Off"}
         </div>
      );
   }
}

export default Sound;
