import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

import { GAME_ASPECT_RATIO } from "utils/constants.js";
import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/resizableContainerStyle.js";

export const SizeContext = createContext(null);

class ResizableContainer extends Component {
   constructor(props) {
      super(props);
      setBodyImage();
      if (!props.noToken) checkToken(props.isGame);

      this.state = { sizingValue: getSizingValue() };
      window.addEventListener("resize", () => {
         this.setState({ sizingValue: getSizingValue() });
      });
   }

   render() {
      const { children, classes } = this.props;
      const { sizingValue } = this.state;

      return (
         <SizeContext.Provider value={sizingValue}>
            <div className={classes.container}>
               <div id="resizeableDiv" className={classes.innerContainer} style={{ height: sizingValue, width: sizingValue * GAME_ASPECT_RATIO }}>
                  {children}
               </div>
            </div>
         </SizeContext.Provider>
      );
   }
}

function getSizingValue() {
   const vpw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
   const vph = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
   return Math.min(vpw / GAME_ASPECT_RATIO, vph);
}

ResizableContainer.propTypes = {
   classes: PropTypes.object.isRequired,
   isGame: PropTypes.bool,
   noToken: PropTypes.bool
};

export default withStyles(styles)(ResizableContainer);
