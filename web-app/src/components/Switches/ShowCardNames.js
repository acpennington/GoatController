import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { switchNames } from "stateStore/actions/shared/settings.js";

import Switch from "@mui/material/Switch";

class ShowCardNames extends PureComponent {
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
         <div>
            <Switch checked={showNames} onChange={this.flipNames} color="primary" style={{ color: "#9c27b0" }} />
            <span>Show Card Names</span>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { showNames: state.settings.showNames };
}

ShowCardNames.propTypes = {
   showNames: PropTypes.bool,
   switchNames: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { switchNames })(ShowCardNames);
