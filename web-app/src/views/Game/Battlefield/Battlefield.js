import React, { Component, Fragment } from "react";
import YugiohCard from "components/YugiohCard/YugiohCard.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/game.js";

class Battlefield extends Component {
   render() {
      const { classes, size } = this.props;

      return (
         <Fragment>
            <div className={classes.cardRow} style={{ height: size }}></div>
            <div className={classes.cardRow}>
               <YugiohCard
                  name="Black Luster Soldier - Envoy of the Beginning"
                  cardType="effectMonster"
                  attribute="Light"
                  levelOrSubtype={8}
                  height={size}
                  notFull
               />
               <YugiohCard
                  name="Black Luster Soldier - Envoy of the Beginning"
                  cardType="effectMonster"
                  attribute="Light"
                  levelOrSubtype={8}
                  height={size}
               />
               <YugiohCard
                  name="Black Luster Soldier - Envoy of the Beginning"
                  cardType="effectMonster"
                  attribute="Light"
                  levelOrSubtype={8}
                  height={size}
               />
               <YugiohCard
                  name="Black Luster Soldier - Envoy of the Beginning"
                  cardType="effectMonster"
                  attribute="Light"
                  levelOrSubtype={8}
                  height={size}
               />
               <YugiohCard
                  name="Black Luster Soldier - Envoy of the Beginning"
                  cardType="effectMonster"
                  attribute="Light"
                  levelOrSubtype={8}
                  height={size}
               />
               <YugiohCard
                  name="Black Luster Soldier - Envoy of the Beginning"
                  cardType="effectMonster"
                  attribute="Light"
                  levelOrSubtype={8}
                  height={size}
               />
               <YugiohCard
                  name="Black Luster Soldier - Envoy of the Beginning"
                  cardType="effectMonster"
                  attribute="Light"
                  levelOrSubtype={8}
                  height={size}
                  notFull
               />
            </div>
            <div className={classes.cardRow}>
               <YugiohCard height={size} blank notFull />
               <YugiohCard height={size} blank />
               <YugiohCard height={size} blank />
               <YugiohCard height={size} blank />
               <YugiohCard height={size} blank />
               <YugiohCard height={size} blank />
               <YugiohCard height={size} blank notFull />
            </div>
         </Fragment>
      );
   }
}

export default withStyles(styles)(Battlefield);
