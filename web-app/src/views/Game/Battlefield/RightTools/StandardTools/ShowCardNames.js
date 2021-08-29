import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import { switchNames } from "stateStore/actions/shared/settings.js";

import { BsTextarea, BsTextareaT } from "react-icons/bs";
import Button from "components/CustomButtons/Button.js";

class ShowCardNames extends PureComponent {
   constructor(props) {
      super(props);

      const storage = window.localStorage;
      const showNames = storage.getItem("showNames");
      if (showNames === null) storage.setItem("showNames", false);
      else if (showNames === "true" && !props.showNames) props.switchNames();
   }

   flipNames = () => {
      const { showNames } = this.props;

      window.localStorage.setItem("showNames", !showNames);
      this.props.switchNames();
   };

   render() {
      const { showNames, small } = this.props;

      let names = showNames ? "Hide Names" : "Show Names";
      if (small && this.context < 1000) names = showNames ? <BsTextarea /> : <BsTextareaT />;

      return (
         <Button color="primary" fullWidth round onClick={this.flipNames}>
            {names}
         </Button>
      );
   }
}

function mapStateToProps(state) {
   return { showNames: state.settings.showNames };
}

ShowCardNames.propTypes = {
   small: PropTypes.bool
};

ShowCardNames.contextType = SizeContext;

export default connect(mapStateToProps, { switchNames })(ShowCardNames);
