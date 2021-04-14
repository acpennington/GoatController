import React, { Component } from "react";
import { connect } from "react-redux";

import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";
import Chat from "components/Chat/Chat.js";
import getPlayerName from "utils/getPlayerName";

import { HERO } from "utils/constants.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class LeftPanel extends Component {
    render() {
        const { classes, hoverCard, selectedCard } = this.props;

        return (
            <div className={classes.leftPanel}>
                <YugiohCardExpanded hoverCard={hoverCard} selectedCard={selectedCard} />
                <Chat name={getPlayerName(HERO)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { hoverCard: state.hoverCard, selectedCard: state.selectedCard };
 }

export default connect(mapStateToProps, {})(withStyles(styles)(LeftPanel));