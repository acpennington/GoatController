import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Switch from "@material-ui/core/Switch";

import { switchChatShortcuts } from "stateStore/actions/shared/settings.js";

class ChatShortcuts extends PureComponent {
   constructor(props) {
      super(props);

      const storage = window.localStorage;
      const chatShortcuts = storage.getItem("chatShortcuts");
      if (chatShortcuts === null) storage.setItem("chatShortcuts", false);
      else if (chatShortcuts === "true" && !props.chatShortcuts) this.props.switchChatShortcuts();
   }

   flipShortcuts = (event) => {
      window.localStorage.setItem("chatShortcuts", event.target.checked);
      this.props.switchChatShortcuts();
   };

   render() {
      const { chatShortcuts } = this.props;

      return (
         <h4>
            <strong>Chat</strong>
            <Switch checked={chatShortcuts} onChange={this.flipShortcuts} color="primary" style={{ color: "#9c27b0" }} />
         </h4>
      );
   }
}

function mapStateToProps(state) {
   return { chatShortcuts: state.settings.chatShortcuts };
}

export default connect(mapStateToProps, { switchChatShortcuts })(ChatShortcuts);

