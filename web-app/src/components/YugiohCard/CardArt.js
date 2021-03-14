import React, { PureComponent, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

import compress from "utils/compressName.js";

class CardArt extends PureComponent {
   render() {
      const { classes, name, nameHeight, cardTypeIcon, levelOrSubtype, atk, def } = this.props;

      return (
         <Fragment>
            <div
               className={classes.art}
               style={{ backgroundImage: 'url("/cards/art/' + compress(name) + '.jpg")' }}
            ></div>
            <div
               className={classes.monsterStats}
               style={{
                  fontSize: nameHeight * 1.29 + "px",
                  lineHeight: nameHeight * 1.29 + "px"
               }}
            >
               {atk && atk + " / " + def}
            </div>
            <div
               className={classes.name}
               style={{
                  fontSize: nameHeight + "px",
                  lineHeight: nameHeight + "px",
                  color: atk ? "black" : "white",
                  filter: "drop-shadow(0px 0px 5px" + (atk ? " white)" : " black)")
               }}
            >
               {name}
            </div>
            <div className={classes.sideBySide} style={{ paddingTop: nameHeight * 2 + "px" }}>
               <div
                  className={classes.icon}
                  style={{
                     lineHeight: nameHeight + "px"
                  }}
               >
                  <img
                     src={"/cards/svgs/attributes/" + cardTypeIcon + ".svg"}
                     draggable="false"
                     height={nameHeight * 1.05 + "px"}
                     alt=""
                  />
               </div>
               <div
                  className={classes.subtitle}
                  style={{
                     lineHeight: nameHeight * 0.71 + "px"
                  }}
               >
                  {getSubtitle(levelOrSubtype, nameHeight * 0.67)}
               </div>
            </div>
         </Fragment>
      );
   }
}

function getSubtitle(starsOrAlt, height) {
   if (Number.isInteger(starsOrAlt)) {
      const starList = [];
      for (let i = 0; i < starsOrAlt; i++) {
         starList.push(
            <div key={i}>
               <img src="/cards/svgs/subtypes/star.svg" draggable="false" height={height} alt="yugioh level star" />
            </div>
         );
      }
      return starList;
   } else
      return (
         <img
            src={"/cards/svgs/subtypes/" + starsOrAlt + ".svg"}
            draggable="false"
            height={height}
            alt="yugioh subtype"
         />
      );
}

export default withStyles(cardStyle)(CardArt);
