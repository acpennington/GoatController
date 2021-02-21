import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

const useStyles = makeStyles(cardStyle);

export default function YugiohCard(props) {
   const classes = useStyles();
   const { cardType, name, width } = props;

   const [cardBg, nameColor] = getColors(cardType);
   const cardArt = <img src={"/cards/small/" + compress(name) + ".jpg"} width={width - 8} alt={name} />;
   const nameHeight = (width * 1.5 - width) / 4;
   const cardTypeIcon = <img src="/cards/svgs/spell.svg" height={nameHeight + "px"} />;

   return (
      <div className={classes.container} style={{ width: width, height: width * 1.5 }} onMouseEnter={log}>
         <div className={classes.svg}>
            <svg width={width} height={width * 1.5}>
               <path
                  d={
                     "M7,2 h" +
                     (width - 14) +
                     " a5,5 0 0 1 5,5 v" +
                     (width * 1.5 - 14) +
                     " a5,5 0 0 1 -5,5 h-" +
                     (width - 14) +
                     " a5,5 0 0 1 -5,-5 v-" +
                     (width * 1.5 - 14) +
                     " a5,5 0 0 1 5,-5 z"
                  }
                  fill={cardBg}
                  stroke="black"
                  strokeWidth="3"
               />
            </svg>
         </div>
         <div className={classes.art}>{cardArt}</div>
         <div
            className={classes.name}
            style={{
               fontSize: nameHeight + "px",
               lineHeight: nameHeight + "px",
               color: nameColor,
               width: width - nameHeight - 8 + "px"
            }}
         >
            {name}
         </div>
         <div
            className={classes.icon}
            style={{
               lineHeight: nameHeight + "px"
            }}
         >
            {cardTypeIcon}
         </div>
      </div>
   );
}

function getColors(cardType) {
   if (cardType === "normalMonster") return ["#fbc676", "black"];
   if (cardType === "effectMonster") return ["#c9823f", "black"];
   if (cardType === "ritualMonster") return ["#156db4", "black"];
   if (cardType === "fusionMonster") return ["#7f598c", "black"];
   if (cardType === "spell") return ["#1f8f97", "white"];
   if (cardType === "trap") return ["#9e427e", "white"];
}

function compress(name) {
   return name.replace(/[^a-zA-Z0-9]/g, "");
}

function log() {
   console.log("clicked");
}

function getSubtitle(starsOrAlt) {}
