import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { bind, unbind } from "mousetrap";

import getCardDetails from "utils/getCardDetails.js";
import CardArt from "./CardArt.js";
import { newHover } from "stateStore/actions/shared/hoverCard.js";
import { newSelection, clearSelection } from "stateStore/actions/shared/selectedCard.js";
import { CARD_RATIO, HERO_SELECTION_COLOR } from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";
const useStyles = makeStyles(cardStyle);

function YugiohCard({ height, location, name, quantity, player, zone }) {
   const classes = useStyles();
   const dispatch = useDispatch();

   const heroSelected = useSelector((state) => state.selectedCard[player] && state.selectedCard[player].zone === zone);
   const { cardType, attribute, levelOrSubtype, atk, def } = getCardDetails(name);

   const [{ isDragging }, drag] = useDrag({
      item: { type: location, name },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging()
      })
   });

   bind("d", () => {
      dispatch();
   });

   useEffect(() => {
      return function cleanup() {
         unbind("d");
      };
   }, []);

   const width = Math.floor(height / CARD_RATIO);

   return (
      <div
         ref={drag}
         className={classes["container"]}
         style={{
            width,
            height,
            opacity: isDragging && 0,
            borderWidth: heroSelected ? "3px" : "0px",
            borderColor: HERO_SELECTION_COLOR,
            backgroundImage: 'url("/cards/bgs/' + cardType + '.jpg")'
         }}
         onClick={() => {
            if (!heroSelected) dispatch(newSelection(player, player, false, zone, name));
            else dispatch(clearSelection());
         }}
         onMouseEnter={() => dispatch(newHover(false, false, zone, name))}
      >
         <CardArt
            name={name}
            nameHeight={Math.floor((height - height / CARD_RATIO) / 4 - 1)}
            cardTypeIcon={attribute || cardType}
            levelOrSubtype={levelOrSubtype}
            atk={atk}
            def={def}
         />
         {quantity !== 1 && (
            <div className={classes.zoneLabel} style={{ fontSize: height / 5 + "px", lineHeight: height / 5 + "px" }}>
               {quantity}
            </div>
         )}
      </div>
   );
}

YugiohCard.propTypes = {
   height: PropTypes.number.isRequired,
   location: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   quantity: PropTypes.number.isRequired,
   zone: PropTypes.number.isRequired,
   player: PropTypes.string.isRequired
};

export default YugiohCard;
