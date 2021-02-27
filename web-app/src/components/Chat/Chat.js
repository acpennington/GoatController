import React, { Component } from "react";
import { connect } from "react-redux";

import CustomInput from "components/CustomInput/CustomInput.js";
import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

import { addMessage } from "stateStore/actions/chat.js";

class Chat extends Component {
   submitMessage = (event) => {
      if (event.key === "Enter") {
         this.props.addMessage({ author: "Player1", content: event.target.value });
         event.target.value = "";
         this.forceUpdate();
      }
   };

   renderMessages = () => {
      const messages = this.props.chat;
      const messagesLength = messages.length;
      const messageList = [];

      for (let i = 0; i < messagesLength; i++) {
         const message = messages[i];
         messageList.push(<div key={i}>{message.author + ": " + message.content}</div>);
      }

      return <div>{messageList}</div>;
   };

   render() {
      const { classes } = this.props;
      return (
         <div className={classes.container}>
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
            {this.renderMessages()}
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { chat: state.chat };
}

export default connect(mapStateToProps, { addMessage })(withStyles(chatStyle)(Chat));
