import React, { Component } from "react";
import { connect } from "react-redux";

import CustomInput from "components/CustomInput/CustomInput.js";
import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { addMessage } from "stateStore/actions/chat.js";
import { HERO } from "utils/constants.js";
import getPlayerName from "utils/getPlayerName.js";

class Chat extends Component {
   submitMessage = (event) => {
      if (event.key === "Enter") {
         const trimmedMessage = event.target.value.trim();
         if (trimmedMessage) {
            this.props.addMessage({ author: getPlayerName(HERO), content: trimmedMessage });
            event.target.value = "";
         }
      }
   };

   renderMessages = () => {
      const messages = this.props.chat;
      const messagesLength = messages.length;
      const messageList = [];

      for (let i = 0; i < messagesLength; i++) {
         const message = messages[messagesLength - 1 - i];
         messageList.push(<div key={i}>{message.author + ": " + message.content}</div>);
      }

      return (
         <FriendlyScroll
            id="chatScroll"
            style={{ position: "absolute", bottom: 0 }}
            contStyle={{ height: "calc(100% - 50px)" }}
         >
            {messageList}
         </FriendlyScroll>
      );
   };

   render() {
      const { classes } = this.props;
      return (
         <div className={classes.container}>
            {this.renderMessages()}
            <CustomInput
               id="Message"
               white
               formControlProps={{
                  fullWidth: true
               }}
               inputProps={{
                  onKeyPress: this.submitMessage,
                  margin: "dense"
               }}
            />
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { chat: state.chat };
}

export default connect(mapStateToProps, { addMessage })(withStyles(chatStyle)(Chat));
