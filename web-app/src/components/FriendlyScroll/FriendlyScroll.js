import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

import ArrowButtons from "./ArrowButtons.js";

import { withStyles } from "@material-ui/core/styles";
import friendlyScrollStyles from "assets/jss/material-kit-react/components/friendlyScrollStyle.js";

class FriendlyScroll extends Component {
   constructor(props) {
      super(props);
      this.child = createRef();
   }

   render() {
      const { classes, id, count, drop, style, contStyle, bgColor, flexDirection, horiz, children } = this.props;

      return (
         <div className={classes.wholeContainer} style={contStyle}>
            <ArrowButtons ref={this.child} id={id} count={count} horiz={horiz} flexDirection={flexDirection} />
            <div
               id={id}
               className={classes["childrenContainer" + (horiz ? "Horiz" : "")]}
               style={{ flexDirection, backgroundColor: bgColor, ...style }}
               ref={drop}
               onScroll={() => this.child.current.updateScrollingBehavior()}
            >
               {children}
            </div>
         </div>
      );
   }
}

FriendlyScroll.propTypes = {
   id: PropTypes.string.isRequired,
   count: PropTypes.number,
   style: PropTypes.object,
   countStyle: PropTypes.object,
   horiz: PropTypes.bool,
   bgcolor: PropTypes.string,
   flexDirection: PropTypes.string
};

FriendlyScroll.defaultProps = {
   count: 0
};

export default withStyles(friendlyScrollStyles)(FriendlyScroll);
