import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

import { DECK, EXTRA_DECK } from "utils/constants.js";

class ZoneLabel extends PureComponent {
   render() {
      const { zoneLabel, counters, villExtension, height, classes } = this.props;
      const size = `${height / (zoneLabel === EXTRA_DECK ? 6.5 : 5)}px`;

      return (
         <Fragment>
            {(zoneLabel !== 0 || counters !== 0) && (
               <div
                  className={classes["zoneLabel" + villExtension + (counters ? "Counters" : "")]}
                  style={{ fontSize: size, lineHeight: size }}
               >
                  <div>{counters || zoneLabel}</div>
                  {(counters ? <img className={classes.counterImg} src="/battle/Counter.png" alt="Counter" /> : '')}
               </div>
            )}
         </Fragment>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const { player, row, isDeck, isExtraDeck, isDiscardZone, cardName } = ownProps;
   const zoneLabel =
      (isDeck && state.field[player][DECK].length) ||
      (isExtraDeck && EXTRA_DECK) ||
      (row === EXTRA_DECK && 3 - (state.field[player].usedFusions[cardName] || 0)) ||
      (isDiscardZone && state.field[player][row].length);
   return { zoneLabel };
}

ZoneLabel.propTypes = {
   height: PropTypes.number.isRequired,
   player: PropTypes.string.isRequired,
   row: PropTypes.string.isRequired,
   counters: PropTypes.number.isRequired,
   isDeck: PropTypes.bool.isRequired,
   isExtraDeck: PropTypes.bool.isRequired,
   isDiscardZone: PropTypes.bool.isRequired,
   cardName: PropTypes.string,
   villExtension: PropTypes.string.isRequired
};

export default connect(mapStateToProps, {})(withStyles(cardStyle)(ZoneLabel));
