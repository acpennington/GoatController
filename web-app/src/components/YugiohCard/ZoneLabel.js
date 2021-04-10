import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

import { DECK, EXTRA_DECK } from "utils/constants.js";

class ZoneLabel extends PureComponent {
    render() {
        const { zoneLabel, villExtension, height, classes } = this.props;

        return (
            <Fragment>
                {zoneLabel !== 0 && (
                    <div className={classes["zoneLabel" + villExtension]} style={{ fontSize: height / 5 + "px", lineHeight: height / 5 + "px" }}>
                        {zoneLabel}
                    </div>
                )}
            </Fragment>
         );
    }
}

function mapStateToProps(state, ownProps) {
    const { player, row, isExtraDeck, isDiscardZone, cardName } = ownProps;
    const zoneLabel =
        (row === DECK && state.field[player][DECK].count) ||
        (isExtraDeck && EXTRA_DECK) ||
        (row === EXTRA_DECK && 3 - (state.field[player].usedFusions[cardName] || 0)) ||
        (isDiscardZone && state.field[player][row].length);
    return { zoneLabel };
}

ZoneLabel.propTypes = {
    height: PropTypes.number.isRequired,
    player: PropTypes.string.isRequired,
    row: PropTypes.string.isRequired,
    isExtraDeck: PropTypes.bool.isRequired,
    isDiscardZone: PropTypes.bool.isRequired,
    cardName: PropTypes.string,
    villExtension: PropTypes.string.isRequired
 };
 
 export default connect(mapStateToProps, {})(withStyles(cardStyle)(ZoneLabel));