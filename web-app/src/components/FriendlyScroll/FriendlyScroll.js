import React, { Component } from "react";
import PropTypes from "prop-types";

import { BsArrowLeftShort, BsArrowRightShort, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

import { withStyles } from "@material-ui/core/styles";
import friendlyScrollStyles from "assets/jss/material-kit-react/components/friendlyScrollStyle.js";
import { BUFFER } from "utils/constants.js";

class FriendlyScroll extends Component {
   constructor(props) {
      super(props);
      this.state = { shouldScrollLeft: false, shouldScrollRight: false, element: false };
   }

   componentDidMount() {
      this.setState({ element: document.getElementById(this.props.id) });
   }

   componentDidUpdate(prevProps) {
      if (prevProps.count !== this.props.count) this.updateScrollingBehavior();
   }

   updateScrollingBehavior = () => {
      const { id, horiz } = this.props;
      const { element } = this.state;

      const scrollgap = horiz ? element.scrollWidth - element.clientWidth : element.scrollHeight - element.clientHeight;
      const scrollbarExists = scrollgap > 0;
      const scrollDist = Math.abs(horiz ? element.scrollLeft : element.scrollTop);
      const shouldScrollLeft = id !== "chatScroll" && scrollbarExists && scrollDist < scrollgap - BUFFER;
      const shouldScrollRight = scrollbarExists && scrollDist > BUFFER;

      if (shouldScrollLeft !== this.state.shouldScrollLeft || shouldScrollRight !== this.state.shouldScrollRight)
         this.setState({ shouldScrollLeft, shouldScrollRight});
   }

   scrollRight = (element) => {
      element.scroll(0, 0);
   };

   scrollLeft = (element) => {
      element.scroll(-element.scrollWidth, -element.scrollHeight);
   };

   render() {
      const { classes, id, drop, style, contStyle, bgColor, horiz, children } = this.props;
      const { element, shouldScrollLeft, shouldScrollRight } = this.state;

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
               className={classes["childrenContainer" + (horiz ? "Horiz" : "")]}
               style={{ backgroundColor: bgColor, ...style }}
               ref={drop}
               onScroll={this.updateScrollingBehavior}
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
   count: PropTypes.number,
   horiz: PropTypes.bool,
   bgcolor: PropTypes.string,
   style: PropTypes.object
};

FriendlyScroll.defaultProps = {
   count: 0
};

export default withStyles(friendlyScrollStyles)(FriendlyScroll);
