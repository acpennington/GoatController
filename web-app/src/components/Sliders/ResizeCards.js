import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setCardSize } from "stateStore/actions/shared/settings";
import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import Slider from "@material-ui/core/Slider";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/resizeCardsStyle.js";

const MINIMUM_CARD_HEIGHT = 30;

class ResizeCards extends PureComponent {
   sliderChange = (event, newValue) => this.props.setCardSize(newValue);

   render() {
      const { classes, cardSize } = this.props;
      const min = Math.min(cardSize, (MINIMUM_CARD_HEIGHT / (this.context / 6.5)) * 50);

      return (
         <div className={classes.flexRow}>
            <div className={classes.resizeHalf}>Resize Cards:</div>
            <div className={classes.resizeHalf}>
               <Slider min={min} value={cardSize} onChange={this.sliderChange} aria-labelledby="continuous-slider" />
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { cardSize: state.settings.cardSize };
}

ResizeCards.propTypes = {
   classes: PropTypes.object.isRequired
};

ResizeCards.contextType = SizeContext;

export default connect(mapStateToProps, { setCardSize })(withStyles(styles)(ResizeCards));
