import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import chatStyle from "assets/jss/material-kit-react/components/chatStyle.js";

class Chat extends Component {
    renderMessages = () => {
        const messages = this.props.chat;
        const messageList = [];

        for (const message of messages) {
            messageList.push(<div>{message.author + ": " + message.content}</div>)
        }

        return (
            <div>{messageList}</div>
        );
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                {/** Send message functionality to be added here*/}
                {this.renderMessages()}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { chat: state.chat };
 }
 
 export default connect(mapStateToProps, {})(withStyles(chatStyle)(Chat));