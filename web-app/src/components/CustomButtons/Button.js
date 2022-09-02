import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { Button, StyledEngineProvider } from "@mui/material";

import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.js";

const makeComponentStyles = makeStyles(() => ({
   ...buttonStyle
}));

const RegularButton = (props) => {
   const { color, round, children, fullWidth, disabled, simple, size, block, link, justIcon, className, ...rest } = props;

   const classes = makeComponentStyles();

   console.log("Button color: " + classes[color]);

   const btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [className]: className
   });
   return (
      <StyledEngineProvider injectFirst>
         <Button {...rest} className={btnClasses}>
            {children}
         </Button>
      </StyledEngineProvider>
   );
};

RegularButton.propTypes = {
   color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "rose",
      "white",
      "facebook",
      "twitter",
      "google",
      "github",
      "transparent",
      false
   ]),
   size: PropTypes.oneOf(["sm", "lg", "md"]),
   simple: PropTypes.bool,
   round: PropTypes.bool,
   fullWidth: PropTypes.bool,
   disabled: PropTypes.bool,
   block: PropTypes.bool,
   link: PropTypes.bool,
   justIcon: PropTypes.bool,
   children: PropTypes.node,
   className: PropTypes.string
};

RegularButton.displayName = "RegularButton";

export default RegularButton;
