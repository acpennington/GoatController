import React, { Component } from "react";
import PropTypes from "prop-types";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { withStyles } from "@material-ui/core/styles";
import friendlyScrollStyles from "assets/jss/material-kit-react/components/friendlyScrollStyle.js";

class FriendlyScroll extends Component {
   scrollLeft = (element) => {
      element.scroll(0, 0);
   };

   scrollRight = (element) => {
      element.scroll(10000, 10000);
   };

   render() {
      const { classes, height, backgroundColor, overflowX, overflowY, drop, id } = this.props;

      const element = document.getElementById(this.props.id);
      const scrollbarExists = element && element.scrollWidth > element.clientWidth;
      const shouldScrollRight = scrollbarExists && element.scrollLeft < element.scrollWidth - element.clientWidth - 10;
      const shouldScrollLeft = scrollbarExists && element.scrollLeft > 10;

      return (
         <div className={classes.wholeContainer}>
            {shouldScrollLeft && (
               <button className={classes["btnLeft"]}>
                  <BsArrowLeftShort size="20px" onClick={() => this.scrollLeft(element)} />
               </button>
            )}
            <div
               id={id}
               className={classes.childrenContainer}
               style={{ height, backgroundColor, overflowX, overflowY }}
               ref={drop}
            >
               {this.props.children}
            </div>
            {shouldScrollRight && (
               <button className={classes["btnRight"]}>
                  <BsArrowRightShort size="20px" onClick={() => this.scrollRight(element)} />
               </button>
            )}
         </div>
      );
   }
}

FriendlyScroll.propTypes = {
   height: PropTypes.number
};

export default withStyles(friendlyScrollStyles)(FriendlyScroll);
