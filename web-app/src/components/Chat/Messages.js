import React, { PureComponent } from "react";

import { HERO } from "utils/constants.js";
import getPlayerName from "utils/getPlayerName.js";

class Messages extends PureComponent {
    render() {
       const { classes, messages } = this.props;
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
             <div className={classes.messageContainer} key={i}>
                <div className={classes["message" + section + (authorIsHero ? "Hero" : "")]}>
                   {(authorIsHero ? "" : message.author + ": ") + message.content}
                </div>
             </div>
          );
       }
 
       return messageList;
    }
 }

 export default Messages;