import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";
import getCardDetails from "utils/getCardDetails.js";
import { closeModal } from "stateStore/actions/settings.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

class RenderCards extends Component {
    constructor(props) {
        super(props);
        this.state = { zoneNumbers: this.filterZones() };
    }

    componentDidUpdate() {
    }

    filterZones = () => {
        console.log("filtering zones");
        const { cardsLen, row, filter, cards, closeModal } = this.props;
        let zoneNumbers = [];
        for (let i = 0; i < cardsLen; i++) zoneNumbers.push(i);

        if (filter)
            zoneNumbers = zoneNumbers.filter((numb) => {
                const cardName = cards[numb].name;
                const cardDetails = getCardDetails(cardName);
                const filters = filter.split(",");

                for (const singleFilter of filters) {
                    const operator = singleFilter.includes(">") ? ">" : singleFilter.includes("<") ? "<" : "=";
                    const [deet, comparator] = singleFilter.split(operator);
                    switch (operator) {
                    case ">":
                        if (!(cardDetails[deet] && cardDetails[deet] >= comparator)) return false;
                        break;
                    case "<":
                        if (!(cardDetails[deet] && cardDetails[deet] <= comparator)) return false;
                        break;
                    default:
                        if (!(cardDetails[deet] && cardDetails[deet] === comparator)) return false;
                    }
                }
                return true;
            });

        if (zoneNumbers.length === 0) closeModal(row);
        return zoneNumbers;
    }

    render() {
        const { classes, cardsLen, height, player, row, cardNames, sub } = this.props;

        const newZoneNumbers = this.filterZones();
        if (!arrIdentical(this.state.zoneNumbers, newZoneNumbers)) this.state.zoneNumbers = newZoneNumbers;
        const { zoneNumbers } = this.state;

        const cardDivs = [];
        for (let i = zoneNumbers.length - 1; i >= 0; i -= 2) {
            cardDivs.push(
                <div className={classes.cards} key={i}>
                    <YugiohCard
                        height={height}
                        player={player}
                        row={row}
                        zone={zoneNumbers[i]}
                        cardName={cardNames ? cardNames[i] : null}
                        notFull
                        modal
                    />
                    {i !== 0 && (
                    <YugiohCard
                        height={height}
                        player={player}
                        row={row}
                        zone={zoneNumbers[i - 1]}
                        cardName={cardNames ? cardNames[zoneNumbers[i - 1]] : null}
                        notFull
                        modal
                    />
                    )}
                </div>
            );
        }
    
        return (
            <FriendlyScroll
                id={"modal" + player + row}
                style={{ flexDirection: "column", overflowY: cardsLen > 12 ? "auto" : "hidden" }}
                contStyle={{ height: "calc(100% - " + sub + "px)" }}
            >
                {cardDivs}
            </FriendlyScroll>
        );
    }
}

function arrIdentical(a1, a2) {
    let i = a1.length;
    if (i !== a2.length) return false;
    while (i--) {
        if (a1[i] !== a2[i]) return false;
    }

    return true;
}

function mapStateToProps(state, ownProps) {
    const { player, row, filter, cardNames } = ownProps;
    const cards = filter && state.field[player][row];
    const cardsLen = cardNames ? cardNames.length : state.field[player][row].length;
    console.log(cardsLen);
    return { cards, cardsLen };
}

RenderCards.propTypes = {
   cardsLen: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   cardNames: PropTypes.array,
   sub: PropTypes.number.isRequired,
   filter: PropTypes.string
};

export default connect(mapStateToProps, { closeModal })(withStyles(styles)(RenderCards));
