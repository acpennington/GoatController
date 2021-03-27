import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

import compress from "utils/compressName.js";

class CardArt extends PureComponent {
   render() {
      const { classes, name, nameHeight, cardTypeIcon, levelOrSubtype, atk, def, isHero, showNames } = this.props;
      const isMonster = !isNaN(levelOrSubtype);
      const villExtension = isHero ? "" : "Villain";

      return (
         <Fragment>
            <div
               className={classes.art}
               style={{ backgroundImage: 'url("/cards/art/' + compress(name) + '.jpg")' }}
            ></div>
            {showNames && (
               <div
                  className={classes["name" + villExtension]}
                  style={{ fontSize: nameHeight + "px", lineHeight: nameHeight + "px" }}
               >
                  {name}
               </div>
            )}
            <div className={classes.lowerHalf}>
               <div
                  className={classes["icons" + (isMonster ? "Mon" : "ST")]}
                  style={{
                     lineHeight: nameHeight + "px"
                  }}
               >
                  {levelOrSubtype !== "Normal" && getSubtitle(levelOrSubtype, nameHeight)}
                  <img
                     src={"/cards/svgs/attributes/" + cardTypeIcon + ".svg"}
                     draggable="false"
                     height={nameHeight * 1.05 + "px"}
                     alt=""
                     style={{ marginLeft: "2.05%" }}
                  />
               </div>
               <div
                  className={classes["monsterStats" + villExtension]}
                  style={{
                     fontSize: nameHeight * 1.29 + "px",
                     lineHeight: nameHeight * 1.29 + "px"
                  }}
               >
                  {isMonster && (
                     <Fragment>
                        <div className={classes.statBox}>{atk}</div>
                        <div className={classes.statBox}>{def}</div>
                     </Fragment>
                  )}
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
            <img src="/cards/svgs/subtypes/star.svg" draggable="false" height={height * 0.67} alt="yugioh level star" />
         );
      }
      return <>{starList}</>;
   } else
      return (
         <img
            src={"/cards/svgs/subtypes/" + starsOrAlt + ".svg"}
            draggable="false"
            height={height * 0.8}
            alt="yugioh subtype"
         />
      );
}

function mapStateToProps(state) {
   return { showNames: state.settings.showNames };
}

export default connect(mapStateToProps, {})(withStyles(cardStyle)(CardArt));
