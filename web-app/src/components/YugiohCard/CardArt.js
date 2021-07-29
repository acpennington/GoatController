import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import compress from "utils/compressName.js";
import FoilStars from "./FoilStars.js";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

class CardArt extends PureComponent {
   getSubtitle = () => {
      const { levelOrSubtype, nameHeight } = this.props;
      if (Number.isInteger(levelOrSubtype)) {
         const starList = [];
         for (let i = 0; i < levelOrSubtype; i++) {
            starList.push(<img src="/cards/svgs/subtypes/star.svg" draggable="false" height={nameHeight * 0.67} alt="yugioh level star" key={i} />);
         }
         return <Fragment>{starList}</Fragment>;
      } else return <img src={"/cards/svgs/subtypes/" + levelOrSubtype + ".svg"} draggable="false" height={nameHeight * 0.8} alt="yugioh subtype" />;
   };

   render() {
      const { classes, name, nameHeight, cardTypeIcon, levelOrSubtype, atk, def, showNames, villExtension, battle } = this.props;
      const isMonster = !isNaN(levelOrSubtype);

      return (
         <Fragment>
            <div className={classes.art} style={{ backgroundImage: 'url("/cards/art/' + compress(name) + '.jpg")' }}>
               {battle && (
                  <div className={classes.battleImgContainer} style={{ position: "absolute", top: 0, background: "rgba(0,0,0,0.5)" }}>
                     <img src={"/battle/" + battle + ".png"} className={classes.battleImg} alt={battle} />
                  </div>
               )}
               <FoilStars nameHeight={nameHeight} />
            </div>
            {showNames && (
               <div className={classes["name" + villExtension]} style={{ fontSize: nameHeight + "px", lineHeight: nameHeight + "px" }}>
                  {name}
               </div>
            )}
            <div className={classes.lowerHalf}>
               <div
                  className={classes["icons" + (isMonster ? "Monster" : "SpellTrap")]}
                  style={{
                     lineHeight: nameHeight + "px"
                  }}
               >
                  {levelOrSubtype !== "Normal" && this.getSubtitle()}
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

function mapStateToProps(state) {
   return { showNames: state.settings.showNames };
}

CardArt.propTypes = {
   name: PropTypes.string,
   nameHeight: PropTypes.number.isRequired,
   cardTypeIcon: PropTypes.string.isRequired,
   levelOrSubtype: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   atk: PropTypes.number,
   def: PropTypes.number,
   villExtension: PropTypes.string,
   battle: PropTypes.string
};

CardArt.defaultProps = {
   villExtension: ""
};

export default connect(mapStateToProps, {})(withStyles(cardStyle)(CardArt));
