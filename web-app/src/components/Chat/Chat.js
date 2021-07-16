import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import ButtonRow from "components/CustomButtons/ButtonRow.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Messages from "./Messages.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { addMessage } from "stateStore/actions/chat.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";

import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

const cannedMessages = [
   { message: "Response?", shortcut: "r" },
   { message: "Yes", shortcut: "y" },
   { message: "No", shortcut: "n" },
   { message: "Thinking", shortcut: "t" },
   { message: "You there?", shortcut: "?" }
];

class Chat extends PureComponent {
   submitMessage = (event) => {
      if (event.key === "Enter") {
         this.sendMessage(this.props.name, event.target.value);
         event.target.value = "";
      }
   };

   sendMessage = (author, content) => {
      const { chat, addMessage } = this.props;
      content = content.trim();
      if (content) {
         const lastMessage = chat[chat.length - 1];
         if (!(lastMessage && lastMessage.author === author && lastMessage.content === content)) addMessage(author, content, this.context);
      }
   };

   componentDidMount() {
      const { name } = this.props;
      for (const canned of cannedMessages)
         bind(canned.shortcut, () => {
            this.sendMessage(name, canned.message);
         });
   }

   componentWillUnmount() {
      for (const canned of cannedMessages) unbind(canned.shortcut);
   }

   render() {
      const { classes, chat, watching, name } = this.props;

      return (
         <div className={classes.container}>
            <FriendlyScroll id="chatScroll" style={{ position: "absolute", bottom: 0 }} contStyle={{ height: watching ? "100%" : "calc(100% - 85px)" }}>
               <Messages messages={chat} hero={name} />
            </FriendlyScroll>
            {!watching && (
               <Fragment>
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
                  <ButtonRow>
                     {cannedMessages.map((canned, index) => (
                        <Button color="primary" size="sm" fullWidth onClick={() => this.sendMessage(name, canned.message)} key={index}>
                           {canned.message}
                        </Button>
                     ))}
                  </ButtonRow>
               </Fragment>
            )}
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { chat: state.chat };
}

Chat.propTypes = {
   watching: PropTypes.bool,
   name: PropTypes.string.isRequired,
   classes: PropTypes.object.isRequired
};

Chat.contextType = WebSocketContext;

export default connect(mapStateToProps, { addMessage })(withStyles(chatStyle)(Chat));
