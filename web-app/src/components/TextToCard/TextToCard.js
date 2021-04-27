import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import YugiohCardExpanded from "components/YugiohCardExpanded/YugiohCardExpanded.js";

import { withStyles } from "@material-ui/core/styles";

const ExpandedCardTooltip = withStyles((theme) => ({
   tooltip: {
      backgroundColor: theme.palette.common.black,
      fontSize: "17px",
      lineHeight: "20px",
      padding: 0,
      fontWeight: 300
   }
}))(Tooltip);

const NormalTooltip = withStyles((theme) => ({
   tooltip: {
      backgroundColor: theme.palette.common.black,
      fontSize: "1rem",
      fontWeight: 300
   },
   arrow: {
      color: theme.palette.common.black
   }
}))(Tooltip);

class TextToCard extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { showExpandedCard: false };
   }

   flipExpandedCard = () => {
      this.setState({ showExpandedCard: !this.state.showExpandedCard });
   };

   render() {
      const { name } = this.props;
      const { showExpandedCard } = this.state;

      if (showExpandedCard)
         return (
            <ClickAwayListener onClickAway={this.flipExpandedCard}>
               <ExpandedCardTooltip
                  title={<YugiohCardExpanded hoverCard={{ name }} height="325px" width="325px" noButtons />}
                  open={true}
                  onClose={this.flipExpandedCard}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
               >
                  <span onClick={this.flipExpandedCard} style={{ textDecoration: "underline" }}>
                     {name}
                  </span>
               </ExpandedCardTooltip>
            </ClickAwayListener>
         );
      else
         return (
            <NormalTooltip title={"Click for card details"} arrow>
               <span onClick={this.flipExpandedCard} style={{ textDecoration: "underline" }}>
                  {name}
               </span>
            </NormalTooltip>
         );
   }
}

TextToCard.propTypes = {
   name: PropTypes.string.isRequired
};

export default TextToCard;
