import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Switch from "@material-ui/core/Switch";

import { setStackSameName } from "stateStore/actions/shared/settings.js";

class StackSameName extends PureComponent {
   flipStack = (event) => {
      this.props.setStackSameName(event.target.checked);
   };

   render() {
      const { stackSameName } = this.props;

      return (
         <div>
            <Switch checked={stackSameName} onChange={this.flipStack} color="primary" style={{ color: "#9c27b0" }} />
            <span>Stack Same Name</span>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { stackSameName: state.settings.stackSameName };
}

StackSameName.propTypes = {
   setStackSameName: PropTypes.func.isRequired,
   stackSameName: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, { setStackSameName })(StackSameName);
