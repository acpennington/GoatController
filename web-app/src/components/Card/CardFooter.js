import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/components/cardFooterStyle.js";

const useStyles = makeStyles(styles);

export default function CardFooter(props) {
   const classes = useStyles();
   const { className, children, ...rest } = props;
   const cardFooterClasses = classNames({
      [classes.cardFooter]: true,
      [className]: className !== undefined
   });
   return (
      <div className={cardFooterClasses} {...rest}>
         {children}
      </div>
   );
}

CardFooter.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};
