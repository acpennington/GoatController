import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

class Messages extends PureComponent {
   render() {
      const { classes, messages, hero } = this.props;
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

         const authorIsHero = hero === message.author;
         messageList.push(
            <div className={classes.messageContainer} key={i}>
               <div className={classes["message" + section + (authorIsHero ? "Hero" : "")]}>
                  {authorIsHero ? (
                     ""
                  ) : (
                     <Fragment>
                        <u>{message.author}</u>:
                     </Fragment>
                  )}{" "}
                  {message.content}
               </div>
            </div>
         );
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
