import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { addMessage } from "stateStore/actions/chat.js";
import { HERO } from "utils/constants.js";
import getPlayerName from "utils/getPlayerName.js";

const cannedMessages = [
   { message: "Response?", shortcut: "r" },
   { message: "Yes", shortcut: "y" },
   { message: "No", shortcut: "n" },
   { message: "Thinking", shortcut: "t" }
];

class Chat extends PureComponent {
   submitMessage = (event) => {
      if (event.key === "Enter") {
         const trimmedMessage = event.target.value.trim();
         if (trimmedMessage) {
            event.target.value = "";
            this.props.addMessage({ author: getPlayerName(HERO), content: trimmedMessage });
         }
      }
   };

   componentDidMount() {
      for (const canned of cannedMessages)
         bind(canned.shortcut, () => {
            this.props.addMessage({ author: getPlayerName(HERO), content: canned.message });
         });
   }

   componentWillUnmount() {
      for (const canned of cannedMessages) unbind(canned.shortcut);
   }

   render() {
      const { classes, chat } = this.props;

      return (
         <div className={classes.container}>
            <FriendlyScroll
               id="chatScroll"
               style={{ position: "absolute", bottom: 0 }}
               contStyle={{ height: "calc(100% - 85px)" }}
            >
               <Messages classes={classes} chat={chat} />
            </FriendlyScroll>
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
            <div className={classes.canned}>
               {cannedMessages.map((canned, index) => (
                  <Button
                     color="primary"
                     size="sm"
                     fullWidth
                     onClick={() => this.props.addMessage({ author: getPlayerName(HERO), content: canned.message })}
                     key={index}
                  >
                     {canned.message}
                  </Button>
               ))}
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { chat: state.chat };
}

class Messages extends PureComponent {
   render() {
      const classes = this.props.classes;
      const messages = this.props.chat;
      const messagesLength = messages.length;
      const messageList = [];

      for (let i = 0; i < messagesLength; i++) {
         const message = messages[messagesLength - 1 - i];

         const prevMessage = messages[messagesLength - 2 - i];
         const nextMessage = messages[messagesLength - 0 - i];
         const messageAbove = prevMessage && prevMessage.author === message.author;
         const messageBelow = nextMessage && nextMessage.author === message.author;

         let section = "";
         if (messageAbove && messageBelow) section = "Mid";
         else if (messageAbove) section = "End";
         else if (messageBelow) section = "Start";

         const authorIsHero = getPlayerName(HERO) === message.author;
         messageList.push(
            <div className={classes.messageContainer}>
               <div className={classes["message" + section + (authorIsHero ? "Hero" : "")]} key={i}>
                  {(authorIsHero ? "" : message.author + ": ") + message.content}
               </div>
            </div>
         );
      }

      return messageList;
   }
}

export default connect(mapStateToProps, { addMessage })(withStyles(chatStyle)(Chat));
