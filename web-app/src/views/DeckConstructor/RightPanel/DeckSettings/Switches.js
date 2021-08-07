import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";

import Switch from "@material-ui/core/Switch";

import { switchNames, setStackSameName } from "stateStore/actions/shared/settings.js";

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

   flipStack = (event) => {
      this.props.setStackSameName(event.target.checked);
   };

   render() {
      const { showNames, stackSameName } = this.props;

      return (
         <Fragment>
            <div>
               <Switch checked={showNames} onChange={this.flipNames} color="primary" style={{ color: "#9c27b0" }} />
               <span>Show Card Names</span>
            </div>
            <div>
               <Switch checked={stackSameName} onChange={this.flipStack} color="primary" style={{ color: "#9c27b0" }} />
               <span>Stack Same Name</span>
            </div>
         </Fragment>
      );
   }
}

function mapStateToProps(state) {
   return { showNames: state.settings.showNames, stackSameName: state.settings.stackSameName };
}

export default connect(mapStateToProps, { switchNames, setStackSameName })(Switches);
