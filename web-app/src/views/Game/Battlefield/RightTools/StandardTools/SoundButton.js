import React, { PureComponent } from "react";

import Button from "components/CustomButtons/Button.js";

import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

class SoundButton extends PureComponent {
   constructor(props) {
      super(props);

      const storage = window.localStorage;
      if (storage.getItem("soundOn") === null) storage.setItem("soundOn", true);

      this.state = { soundOn: storage.getItem("soundOn") === "true" };
   }

   flipSound = () => {
      const { soundOn } = this.state;
      this.setState({ soundOn: !soundOn });
      window.localStorage.setItem("soundOn", !soundOn);
   };

   render() {
      const { soundOn } = this.state;

      return (
         <Button color="primary" fullWidth round onClick={this.flipSound}>
           {soundOn ? <FaVolumeUp /> : <FaVolumeMute />}
         </Button>
      );
   }
}

export default SoundButton;
