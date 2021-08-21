import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Fuse from "fuse.js";

import { newHover } from "stateStore/actions/shared/hoverCard";
import { newSelection } from "stateStore/actions/shared/selectedCard";
import { cards } from "shared/database";

import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

const DRAW_PHASE_MESSAGE = /set the phase to Draw./;

class Messages extends PureComponent {
   transformCard = (msg) => {
      const { hero, newSelection, newHover } = this.props;
      let rtn = [];
      let remainingText = msg;
      let id = 0;

      while (remainingText.includes("<<")) {
         const splitString = remainingText.split("<<");
         const firstPart = splitString.shift();
         splitString.join("<<");
         if (firstPart) rtn.push(<Fragment key={id++}>{firstPart}</Fragment>);

         const secondSplit = splitString.join("<<").split(">>");
         const secondPart = secondSplit.shift();
         const thirdPart = secondSplit.join(">>");

         if (secondPart) {
            let cardName = secondPart;
            const cardList = Object.keys(cards);
            if (!cardList.includes(cardName)) {
               const fuse = new Fuse(cardList, { threshold: 0.3 });
               const results = fuse.search(cardName);
               const firstResult = results.length > 0 && results[0].item;
               if (firstResult) cardName = firstResult;
            }

            rtn.push(
               <span
                  style={{ textDecoration: "underline" }}
                  onMouseOver={() => newHover(hero, null, null, cardName)}
                  onClick={() => newSelection(hero, hero, null, null, cardName, true)}
                  key={id++}
               >
                  {cardName}
               </span>
            );
         }

         remainingText = thirdPart;
      }

      if (remainingText) rtn.push(<Fragment key={id++}>{remainingText}</Fragment>);
      return rtn;
   };

   bold = (msg) => {
      const rtn = [];
      const i = msg.indexOf("RANDOMLY");
      rtn.push(<Fragment key={1}>{msg.slice(0, i)}</Fragment>);
      rtn.push(<b>randomly</b>);
      rtn.push(<Fragment key={2}>{this.transformCard(msg.slice(i + 8))}</Fragment>);
      return rtn;
   };

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

         const className = classes["message" + section + (authorIsHero ? "Hero" : "")] + (classes[author] ? ` ${classes[author]}` : "");
         messageList.push(
            <div className={classes.messageContainer} key={i}>
               <div className={className}>{content.includes("RANDOMLY") && author === "Server" ? this.bold(content) : this.transformCard(content)}</div>
            </div>
         );
         if (author === "Server" && DRAW_PHASE_MESSAGE.test(content)) {
            messageList.push(<hr style={{ width: "80%", margin: "10px auto" }} />);
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

export default connect(null, { newHover, newSelection })(withStyles(chatStyle)(Messages));
