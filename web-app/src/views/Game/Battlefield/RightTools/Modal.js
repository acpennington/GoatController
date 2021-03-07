import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll.js";
import YugiohCard from "components/YugiohCard/YugiohCard.js";
import { closeModal } from "stateStore/actions/settings.js";
import getPlayerName from "utils/getPlayerName.js";
import { EXTRA_DECK, MODAL_CARD_SIZE } from "utils/constants.js";

import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

const useStyles = makeStyles(styles);

function Modal({ pile, height }) {
   const classes = useStyles();
   const dispatch = useDispatch();

   const { player, row } = pile;
   const isExtra = row === EXTRA_DECK;

   const cardsLen = useSelector((state) => !isExtra && state.field[player][row].length);
   if (cardsLen === 0) dispatch(closeModal());

   return (
      <div className={classes.modalContainer}>
         <Tooltip id="switch discard" title="Click to close" placement="bottom" classes={{ tooltip: classes.tooltip }}>
            <div className={classes.header} onClick={() => dispatch(closeModal())}>
               Viewing {!isExtra && getPlayerName(player) + "'s"} {row}
            </div>
         </Tooltip>
         <RenderCards
            classes={classes}
            cardsLen={cardsLen}
            height={height * MODAL_CARD_SIZE}
            player={player}
            row={row}
         />
      </div>
   );
}

class RenderCards extends PureComponent {
   render() {
      const { classes, cardsLen, height, player, row } = this.props;
      const cardDivs = [];

      for (let i = cardsLen - 1; i >= 0; i -= 2) {
         cardDivs.push(
            <div className={classes.cards} key={i}>
               <YugiohCard height={height} player={player} row={row} zone={i} notFull />
               {i !== 0 && <YugiohCard height={height} player={player} row={row} zone={i - 1} notFull />}
            </div>
         );
      }

      return (
         <FriendlyScroll id="modal" style={{ flexDirection: "column" }} contStyle={{ height: "calc(100% - 85px)" }}>
            {cardDivs}
         </FriendlyScroll>
      );
   }
}

Modal.propTypes = {
   height: PropTypes.number.isRequired,
   pile: PropTypes.object.isRequired
};

RenderCards.propTypes = {
   classes: PropTypes.object.isRequired,
   cardsLen: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired
};

export default Modal;
