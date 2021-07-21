import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

const DRAW_PHASE_MESSAGE = /set the phase to Draw./;
class Messages extends PureComponent {
   render() {
      const { classes, messages, hero } = this.props;
      const messagesLength = messages.length;
      const messageList = [];

      for (let i = 0; i < messagesLength; i++) {
         const message = messages[messagesLength - 1 - i];
         const { author, content } = message;
         const authorIsHero = hero === author;

         const prevMessage = messages[messagesLength - 2 - i];
         const nextMessage = messages[messagesLength - 0 - i];
         const messageAbove = prevMessage && prevMessage.author === author;
         const messageBelow = nextMessage && nextMessage.author === author;

         let section = "";
         if (messageAbove && messageBelow) section = "Mid";
         else if (messageAbove) section = "End";
         else if (messageBelow) section = "Start";

         const className = classes["message" + section + (authorIsHero ? "Hero" : "")] +
            (classes[author] ? ` ${classes[author]}` :  "");
         messageList.push(
            <div className={classes.messageContainer} key={i}>
               <div className={className}>
                  {content}
               </div>
            </div>
         );
         if (author === 'Server' && DRAW_PHASE_MESSAGE.test(content)) {
            messageList.push(<hr style={{width: "80%", margin: "10px auto"}} />);
         }
      }

      return messageList;
   }
}

Messages.propTypes = {
   classes: PropTypes.object.isRequired,
   messages: PropTypes.array.isRequired,
   hero: PropTypes.string.isRequired
};

export default withStyles(chatStyle)(Messages);
