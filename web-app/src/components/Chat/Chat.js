import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

import Messages from "./Messages.js";
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
         this.sendMessage(getPlayerName(HERO), event.target.value);
         event.target.value = "";
      }
   };

   sendMessage = (author, content) => {
      content = content.trim();
      if (content) {
         const allMessages = this.props.chat;
         const lastMessage = allMessages[allMessages.length - 1];
         if (!(lastMessage.author === author && lastMessage.content === content))
            this.props.addMessage(author, content);
      }
   };

   componentDidMount() {
      for (const canned of cannedMessages)
         bind(canned.shortcut, () => {
            this.sendMessage(getPlayerName(HERO), canned.message);
         });
   }

   componentWillUnmount() {
      for (const canned of cannedMessages) unbind(canned.shortcut);
   }

   render() {
      const { classes, chat, watching } = this.props;

      return (
         <div className={classes.container}>
            <FriendlyScroll
               id="chatScroll"
               style={{ position: "absolute", bottom: 0 }}
               contStyle={{ height: watching ? "100%" : "calc(100% - 85px)" }}
            >
               <Messages classes={classes} messages={chat} />
            </FriendlyScroll>
            {!watching && <Fragment>
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
                        onClick={() => this.sendMessage(getPlayerName(HERO), canned.message)}
                        key={index}
                     >
                        {canned.message}
                     </Button>
                  ))}
               </div>
            </Fragment>}
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { chat: state.chat };
}

Chat.propTypes = {
   watching: PropTypes.bool
}

export default connect(mapStateToProps, { addMessage })(withStyles(chatStyle)(Chat));
