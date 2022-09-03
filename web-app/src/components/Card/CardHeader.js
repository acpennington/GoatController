import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/components/cardHeaderStyle.js";
const useStyles = makeStyles(styles);

export default function CardHeader(props) {
   const classes = useStyles();
   const { className, children, color, plain, ...rest } = props;
   const cardHeaderClasses = classNames({
      [classes.cardHeader]: true,
      [classes[color + "CardHeader"]]: color,
      [classes.cardHeaderPlain]: plain,
      [className]: className !== undefined
   });
   return (
      <div className={cardHeaderClasses} {...rest}>
         {children}
      </div>
   );
}

CardHeader.propTypes = {
   className: PropTypes.string,
   color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
   plain: PropTypes.bool,
   children: PropTypes.node
};
