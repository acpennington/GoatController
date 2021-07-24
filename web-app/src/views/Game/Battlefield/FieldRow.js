import React, { Component } from "react";
import PropTypes from "prop-types";

import YugiohCard from "components/YugiohCard/YugiohCard.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/battlefield.js";

class FieldRow extends Component {
   render() {
      const { classes, rowHeight, cardHeight, player, rowType, isHero, divOnly } = this.props;

      if (divOnly) return <div className={classes.cardRow} style={{ height: rowHeight }}></div>;

      const cards = [];

      for (let i = 0; i < 5; i++) {
         const card = <YugiohCard height={cardHeight} player={player} row={rowType} isHero={isHero} zone={i} key={i} />;
         if (isHero) cards.push(card);
         else cards.unshift(card);
      }

      return (
         <div className={classes.cardRow} style={{ height: rowHeight }}>
            {cards}
         </div>
      );
   }
}

FieldRow.propTypes = {
   classes: PropTypes.object.isRequired,
   rowHeight: PropTypes.number.isRequired,
   cardHeight: PropTypes.number.isRequired,
   player: PropTypes.string.isRequired,
   rowType: PropTypes.string.isRequired,
   isHero: PropTypes.bool,
   divOnly: PropTypes.bool
};

export default withStyles(styles)(FieldRow);
