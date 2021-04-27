import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import RenderCards from "./RenderCards.js";
import ModalHeader from "./ModalHeader.js";
import { closeModal } from "stateStore/actions/settings.js";
import getCardDetails from "utils/getCardDetails";
import { EXTRA_DECK, MODAL_CARD_SIZE } from "utils/constants.js";
import { fusions } from "databases/cardDB.js";

import Button from "components/CustomButtons/Button.js";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

const useStyles = makeStyles(styles);
const levels = [1, 3, 4, 5, 6, 7, 8, 9];

function Modal({ pile, height }) {
   const classes = useStyles();
   const dispatch = useDispatch();

   const { player, row } = pile;
   const isExtra = row === EXTRA_DECK;

   const flipSwitch = (event) => {
      setMetaTargets(event.target.checked);
      if (!event.target.checked) setLevelFilter(false);
   };

   const [metaTargets, setMetaTargets] = useState(true);
   const [levelFilter, setLevelFilter] = useState(false);

   const usedFusions = useSelector((state) => isExtra && state.field[player].usedFusions);
   const fusionNames =
      isExtra &&
      Object.keys(fusions)
         .filter((name) => !usedFusions[name] || usedFusions[name] < 3)
         .filter((name) => {
            const cardDetails = getCardDetails(name);
            return !cardDetails.noMeta === metaTargets && (!levelFilter || levelFilter === cardDetails.levelOrSubtype);
         });

   const cardsLen = useSelector((state) => (isExtra ? fusionNames.length : state.field[player][row].length));
   if (cardsLen === 0) dispatch(closeModal(row));

   const [hfHeights, sethfHeights] = useState(0);
   useEffect(() => {
      const header = document.getElementById("modalheader");
      const footer = document.getElementById("modalfooter");
      sethfHeights((header ? header.offsetHeight : 0) + (footer ? footer.offsetHeight : 0));
   }, []);

   return (
      <div className={classes.modalContainer}>
         <ModalHeader classes={classes} isExtra={isExtra} player={player} row={row} />
         <RenderCards
            classes={classes}
            cardsLen={cardsLen}
            height={height * MODAL_CARD_SIZE}
            player={player}
            row={row}
            cardNames={fusionNames}
            sub={hfHeights}
            filter={pile.filter}
         />
         {isExtra && (
            <div id="modalfooter" className={classes["footer" + row.split(" ")[0]]}>
               <Switch
                  checked={metaTargets}
                  onChange={(event) => flipSwitch(event)}
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
                              level === levelFilter ? setLevelFilter(false) : setLevelFilter(level);
                           }}
                           key={index}
                        >
                           {level}
                        </Button>
                     ))}
                  </div>
               )}
            </div>
         )}
      </div>
   );
}

Modal.propTypes = {
   height: PropTypes.number.isRequired,
   pile: PropTypes.object.isRequired
};

export default Modal;
