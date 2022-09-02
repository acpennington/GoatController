import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import ButtonRow from "components/CustomButtons/ButtonRow.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Messages from "./Messages.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import { addMessage } from "stateStore/actions/game/chat.js";
import { WebSocketContext } from "views/Game/WebSocketContext.js";

import { FIELD_SPELL, HAND } from "shared/constants.js";

import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

const EFFECT_MESSAGE = "Effect!";
const cannedMessages = {
   OK: "k",
   No: "n",
   Thinking: null, // NB: "t" is already used to cycle through spell/traps
   "Response?": "?",
   [EFFECT_MESSAGE]: "f"
};

class Chat extends PureComponent {
   constructor(props) {
      super(props);
      this.ref = React.createRef();
   }

   componentWillUnmount() {
      for (const message in cannedMessages) {
         const shortcut = cannedMessages[message];
         if (shortcut) unbind(shortcut);
      }
   }

   submitMessage = (event) => {
      if (event.key === "Enter") {
         this.sendMessage(this.props.name, event.target.value);
         event.target.value = "";
      }
   };

   sendMessage = (author, content) => {
      const { chat, addMessage, heroSelected, heroField } = this.props;
      content = content.trim();

      if (content === EFFECT_MESSAGE && heroSelected) {
         const { row, zone } = heroSelected;
         const card = row === FIELD_SPELL ? heroField[FIELD_SPELL] : heroField[row][zone];
         if (row !== HAND && !card.facedown) content = "Activate the effect of <<" + card.name + ">>.";
      }

      if (content) {
         const lastMessage = chat[chat.length - 1];
         if (!(lastMessage && lastMessage.author === author && lastMessage.content === content)) addMessage(author, content, this.context);
      }
   };

   render() {
      const { classes, chat, watching, name, chatShortcuts } = this.props;

      for (const message in cannedMessages) {
         const shortcut = cannedMessages[message];
         if (shortcut) {
            if (chatShortcuts || message === EFFECT_MESSAGE) {
               bind(shortcut, () => this.sendMessage(name, message));
            } else {
               unbind(shortcut);
            }
         }
      }

      return (
         <div className={classes.container} onClick={() => this.ref.current.focus()}>
            <FriendlyScroll id="chatScroll" style={{ position: "absolute", bottom: 0 }} contStyle={{ height: watching ? "100%" : "calc(100% - 85px)" }}>
               <Messages messages={chat} hero={name} />
            </FriendlyScroll>
            {!watching && (
               <Fragment>
                  <CustomInput
                     ref={this.ref}
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
                     {Object.keys(cannedMessages).map((canned, index) => (
                        <Button color="primary" size="sm" fullWidth onClick={() => this.sendMessage(name, canned)} key={index}>
                           {canned}
                        </Button>
                     ))}
                  </ButtonRow>
               </Fragment>
            )}
         </div>
      );
   }
}

function mapStateToProps(state, ownProps) {
   return {
      chat: state.chat,
      heroSelected: state.selectedCard[ownProps.name],
      heroField: state.field[ownProps.name],
      chatShortcuts: state.settings.chatShortcuts
   };
}

Chat.propTypes = {
   watching: PropTypes.bool,
   name: PropTypes.string.isRequired,
   classes: PropTypes.object.isRequired,
   chat: PropTypes.array.isRequired,
   addMessage: PropTypes.func.isRequired,
   heroSelected: PropTypes.object,
   heroField: PropTypes.object.isRequired,
   chatShortcuts: PropTypes.any
};

Chat.contextType = WebSocketContext;

export default connect(mapStateToProps, { addMessage })(withStyles(chatStyle)(Chat));
