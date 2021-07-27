import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";

import Switch from "@material-ui/core/Switch";

import { switchNames } from "stateStore/actions/shared/settings.js";

class Switches extends PureComponent {
   constructor(props) {
      super(props);

      const storage = window.localStorage;
      if (storage.getItem("soundOn") === null) storage.setItem("soundOn", true);
      const showNames = storage.getItem("showNames");
      if (showNames === null) storage.setItem("showNames", false);
      else if (showNames === "true" && !props.showNames) props.switchNames();

      this.state = { soundOn: storage.getItem("soundOn") === "true" };
   }

   flipSound = (event) => {
      window.localStorage.setItem("soundOn", event.target.checked);
      this.setState({ soundOn: event.target.checked });
   };

   flipNames = (event) => {
      window.localStorage.setItem("showNames", event.target.checked);
      this.props.switchNames();
   };

   render() {
      const { showNames } = this.props;
      const { soundOn } = this.state;

      return (
         <Fragment>
            <Switch checked={soundOn} onChange={(event) => this.flipSound(event)} color="primary" style={{ color: "#9c27b0" }} />
            Sound {soundOn ? "On" : "Off"}
            <br />
            <Switch checked={showNames} onChange={(event) => this.flipNames(event)} color="primary" style={{ color: "#9c27b0" }} />
            Show Card Names
         </Fragment>
      );
   }
}

function mapStateToProps(state) {
   return { showNames: state.settings.showNames };
}

export default connect(mapStateToProps, { switchNames })(Switches);
