import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import { BsArrowLeftShort, BsArrowRightShort, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

import { withStyles } from "@material-ui/core/styles";
import friendlyScrollStyles from "assets/jss/material-kit-react/components/friendlyScrollStyle.js";
import { BUFFER } from "utils/constants.js";

class ArrowButtons extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { shouldScrollLeft: false, shouldScrollRight: false };
   }

   componentDidMount() {
      this.element = document.getElementById(this.props.id);
      this.updateScrollingBehavior();
   }

   componentDidUpdate(prevProps) {
      if (prevProps.count !== this.props.count) this.updateScrollingBehavior();
   }

   updateScrollingBehavior = () => {
      const { id, horiz, flexDirection } = this.props;
      const { element } = this;

      const scrollgap = horiz ? element.scrollWidth - element.clientWidth : element.scrollHeight - element.clientHeight;
      const scrollbarExists = scrollgap > 0;
      const scrollDist = Math.abs(horiz ? element.scrollLeft : element.scrollTop);

      const scrollA = id !== "chatScroll" && scrollbarExists && scrollDist < scrollgap - BUFFER;
      const scrollB = scrollbarExists && scrollDist > BUFFER;
      const shouldScrollLeft = flexDirection === "column" ? scrollB : scrollA;
      const shouldScrollRight = flexDirection === "column" ? scrollA : scrollB;

      if (shouldScrollLeft !== this.state.shouldScrollLeft || shouldScrollRight !== this.state.shouldScrollRight)
         this.setState({ shouldScrollLeft, shouldScrollRight });
   };

   scrollRight = () => {
      const { flexDirection } = this.props;
      const { element } = this;

      if (flexDirection === "column") element.scroll({ left: element.scrollWidth, top: element.scrollHeight, behavior: "smooth" });
      else element.scroll({ left: 0, top: 0, behavior: "smooth" });
   };

   scrollLeft = () => {
      const { flexDirection } = this.props;
      const { element } = this;

      if (flexDirection === "column") element.scroll({ left: 0, top: 0, behavior: "smooth" });
      element.scroll({ left: -element.scrollWidth, top: -element.scrollHeight, behavior: "smooth" });
   };

   render() {
      const { classes, horiz } = this.props;
      const { shouldScrollLeft, shouldScrollRight } = this.state;

      return (
         <Fragment>
            {shouldScrollLeft && (
               <button className={classes["btn" + (horiz ? "Left" : "Top")]}>
                  {horiz ? <BsArrowLeftShort size="20px" onClick={this.scrollLeft} /> : <BsArrowUpShort size="20px" onClick={this.scrollLeft} />}
               </button>
            )}
            {shouldScrollRight && (
               <button className={classes["btn" + (horiz ? "Right" : "Bottom")]}>
                  {horiz ? <BsArrowRightShort size="20px" onClick={this.scrollRight} /> : <BsArrowDownShort size="20px" onClick={this.scrollRight} />}
               </button>
            )}
         </Fragment>
      );
   }
}

ArrowButtons.propTypes = {
   id: PropTypes.string.isRequired,
   count: PropTypes.number,
   horiz: PropTypes.bool,
   flexDirection: PropTypes.string
};

export default withStyles(friendlyScrollStyles)(ArrowButtons);
