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
      this.state.element = document.getElementById(this.props.id);
      this.updateScrollingBehavior();
   }

   componentDidUpdate(prevProps) {
      if (prevProps.count !== this.props.count) this.updateScrollingBehavior();
   }

   updateScrollingBehavior = () => {
      const { id, horiz, flexDirection } = this.props;
      const { element } = this.state;

      const scrollgap = horiz ? element.scrollWidth - element.clientWidth : element.scrollHeight - element.clientHeight;
      const scrollbarExists = scrollgap > 0;
      const scrollDist = Math.abs(horiz ? element.scrollLeft : element.scrollTop);

      const scrollA = id !== "chatScroll" && scrollbarExists && scrollDist < scrollgap - BUFFER;
      const scrollB = scrollbarExists && scrollDist > BUFFER;
      const shouldScrollLeft = flexDirection === "column" ? scrollB : scrollA;
      const shouldScrollRight = flexDirection === "column" ? scrollA : scrollB;

      if (shouldScrollLeft !== this.state.shouldScrollLeft || shouldScrollRight !== this.state.shouldScrollRight)
         this.setState({ shouldScrollLeft, shouldScrollRight});
   }

   scrollRight = () => {
      const { flexDirection } = this.props;
      const { element } = this.state;
      if (flexDirection === "column") element.scroll(element.scrollWidth, element.scrollHeight);
      else element.scroll(0, 0);
   };

   scrollLeft = () => {
      const { flexDirection } = this.props;
      const { element } = this.state;
      if (flexDirection === "column") element.scroll(0, 0);
      element.scroll(-element.scrollWidth, -element.scrollHeight);
   };

   render() {
      const { classes, id, drop, style, contStyle, bgColor, flexDirection, horiz, children } = this.props;
      const { shouldScrollLeft, shouldScrollRight } = this.state;

      return (
         <div className={classes.wholeContainer} style={contStyle}>
            {shouldScrollLeft && (
               <button className={classes["btn" + (horiz ? "Left" : "Top")]}>
                  {horiz ? (
                     <BsArrowLeftShort size="20px" onClick={this.scrollLeft} />
                  ) : (
                     <BsArrowUpShort size="20px" onClick={this.scrollLeft} />
                  )}
               </button>
            )}
            <div
               id={id}
               className={classes["childrenContainer" + (horiz ? "Horiz" : "")]}
               style={{ flexDirection, backgroundColor: bgColor, ...style }}
               ref={drop}
               onScroll={this.updateScrollingBehavior}
            >
               {children}
            </div>
            {shouldScrollRight && (
               <button className={classes["btn" + (horiz ? "Right" : "Bottom")]}>
                  {horiz ? (
                     <BsArrowRightShort size="20px" onClick={this.scrollRight} />
                  ) : (
                     <BsArrowDownShort size="20px" onClick={this.scrollRight} />
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
   flexDirection: PropTypes.string,
   style: PropTypes.object
};

FriendlyScroll.defaultProps = {
   count: 0
};

export default withStyles(friendlyScrollStyles)(FriendlyScroll);
