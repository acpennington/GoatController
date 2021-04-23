import React, { Component } from "react";
import PropTypes from "prop-types";

import { BsArrowLeftShort, BsArrowRightShort, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

import { withStyles } from "@material-ui/core/styles";
import friendlyScrollStyles from "assets/jss/material-kit-react/components/friendlyScrollStyle.js";
import { BUFFER } from "utils/constants.js";

class FriendlyScroll extends Component {
   scrollLeft = (element) => {
      element.scroll(0, 0);
   };

   scrollRight = (element) => {
      element.scroll(element.scrollWidth, element.scrollHeight);
   };

   render() {
      const { classes, id, drop, style, contStyle, bgColor, horiz, children } = this.props;

      const element = document.getElementById(this.props.id);
      const scrollgap =
         element && (horiz ? element.scrollWidth - element.clientWidth : element.scrollHeight - element.clientHeight);
      const scrollbarExists = scrollgap > 0;
      const shouldScrollRight =
         scrollbarExists && (horiz ? element.scrollLeft : element.scrollTop) < scrollgap - BUFFER;
      const shouldScrollLeft =
         id !== "chatScroll" && scrollbarExists && (horiz ? element.scrollLeft : element.scrollTop) > BUFFER;

      return (
         <div className={classes.wholeContainer} style={contStyle}>
            {shouldScrollLeft && (
               <button className={classes["btn" + (horiz ? "Left" : "Top")]}>
                  {horiz ? (
                     <BsArrowLeftShort size="20px" onClick={() => this.scrollLeft(element)} />
                  ) : (
                     <BsArrowUpShort size="20px" onClick={() => this.scrollLeft(element)} />
                  )}
               </button>
            )}
            <div
               id={id}
               className={classes.childrenContainer}
               style={{ backgroundColor: bgColor, ...style }}
               ref={drop}
            >
               {children}
            </div>
            {shouldScrollRight && (
               <button className={classes["btn" + (horiz ? "Right" : "Bottom")]}>
                  {horiz ? (
                     <BsArrowRightShort size="20px" onClick={() => this.scrollRight(element)} />
                  ) : (
                     <BsArrowDownShort size="20px" onClick={() => this.scrollRight(element)} />
                  )}
               </button>
            )}
         </div>
      );
   }
}

FriendlyScroll.propTypes = {
   id: PropTypes.string.isRequired,
   horiz: PropTypes.bool
};

export default withStyles(friendlyScrollStyles)(FriendlyScroll);
