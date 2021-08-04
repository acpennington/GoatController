import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";

import Switch from "@material-ui/core/Switch";

import { switchNames } from "stateStore/actions/shared/settings.js";

class Switches extends PureComponent {
   constructor(props) {
      super(props);

      const storage = window.localStorage;
      const showNames = storage.getItem("showNames");
      if (showNames === null) storage.setItem("showNames", false);
      else if (showNames === "true" && !props.showNames) props.switchNames();
   }

   flipNames = (event) => {
      window.localStorage.setItem("showNames", event.target.checked);
      this.props.switchNames();
   };

   render() {
      const { showNames } = this.props;

      return (
         <Fragment>
            <Switch checked={showNames} onChange={(event) => this.flipNames(event)} color="primary" style={{ color: "#9c27b0" }} />
            <span>Show Card Names</span>
         </Fragment>
      );
   }
}

function mapStateToProps(state) {
   return { showNames: state.settings.showNames };
}

export default connect(mapStateToProps, { switchNames })(Switches);
