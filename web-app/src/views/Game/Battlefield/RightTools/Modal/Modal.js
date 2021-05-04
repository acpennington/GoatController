import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RenderCards from "./RenderCards.js";
import ModalHeader from "./ModalHeader.js";
import ShortcutFooter from "./ShortcutFooter.js"

import { closeModal } from "stateStore/actions/settings.js";
import getCardDetails from "utils/getCardDetails";
import { HERO, EXTRA_DECK, MODAL_CARD_SIZE } from "utils/constants.js";
import { fusions } from "databases/cardDB.js";

import Button from "components/CustomButtons/Button.js";
import Switch from "@material-ui/core/Switch";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

const levels = [1, 3, 4, 5, 6, 7, 8, 9];

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = { metaTargets: true, levelFilter: false, hfHeights: 0 };
    }

    componentDidMount() {
        this.setHfHeights();
    }

    componentDidUpdate() {
        this.setHfHeights();
    }

    setHfHeights = () => {
        const header = document.getElementById("modalheader");
        const footer = document.getElementById("modalfooter");
        const newHeights = (header ? header.offsetHeight : 0) + (footer ? footer.offsetHeight : 0);
        if (newHeights !== this.state.hfHeights) this.setState({ hfHeights: newHeights });
    }

    flipSwitch = (event) => {
        this.setState({ metaTargets: event.target.checked });
        if (!event.target.checked) this.setState({ levelFilter: false });
    };

    render() {
        const { classes, height, player, row, filter, isExtra, usedFusions, rowLength, closeModal } = this.props;
        const { metaTargets, levelFilter, hfHeights } = this.state;

        console.log(isExtra);

        const fusionNames =
            isExtra &&
            Object.keys(fusions)
                .filter((name) => !usedFusions[name] || usedFusions[name] < 3)
                .filter((name) => {
                    const cardDetails = getCardDetails(name);
                    return !cardDetails.noMeta === metaTargets && (!levelFilter || levelFilter === cardDetails.levelOrSubtype);
                });

        const cardsLen = isExtra ? fusionNames.length : rowLength;
        if (cardsLen === 0) closeModal(row);

        return (
            <div className={classes.modalContainer}>
                <ModalHeader addName={!isExtra} player={player} row={row} />
                <RenderCards
                    classes={classes}
                    cardsLen={cardsLen}
                    height={height * MODAL_CARD_SIZE}
                    player={player}
                    row={row}
                    cardNames={fusionNames}
                    sub={hfHeights}
                    filter={filter}
                />
                {player === HERO && (
                    <div id="modalfooter" className={classes["footer" + row.split(" ")[0]]}>
                    {isExtra ? (
                        <Fragment>
                            <Switch
                                checked={metaTargets}
                                onChange={(event) => this.flipSwitch(event)}
                                color="primary"
                                style={{ color: "#9c27b0" }}
                            />
                            Meta Targets
                            {metaTargets && (
                                <div className={classes.levelFilter}>
                                {levels.map((level, index) => (
                                    <Button
                                        color={levelFilter === level ? "primary" : "info"}
                                        size="sm"
                                        round
                                        justIcon
                                        onClick={() => {
                                            this.setState({ levelFilter: (level === levelFilter ? false : level) });
                                        }}
                                        key={index}
                                    >
                                        {level}
                                    </Button>
                                ))}
                                </div>
                            )}
                        </Fragment>
                    ) : (
                        <ShortcutFooter row={row} />
                    )}
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { player, row, filter } = ownProps.pile ;
    const isExtra = row === EXTRA_DECK;
    const usedFusions = isExtra && state.field[player].usedFusions;
    const rowLength = !isExtra && state.field[player][row].length;
    return { player, row, filter, isExtra, usedFusions, rowLength };
}

Modal.propTypes = {
   height: PropTypes.number.isRequired,
   pile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { closeModal })(withStyles(styles)(Modal));