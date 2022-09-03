import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/components/cardStyle.js";
const useStyles = makeStyles(styles);

export default function Card(props) {
   const classes = useStyles();
   const { className, children, plain, carousel, ...rest } = props;
   const cardClasses = classNames({
      [classes.card]: true,
      [classes.cardPlain]: plain,
      [classes.cardCarousel]: carousel,
      [className]: className !== undefined
   });
   return (
      <div className={cardClasses} {...rest}>
         {children}
      </div>
   );
}

Card.propTypes = {
   className: PropTypes.string,
   plain: PropTypes.bool,
   carousel: PropTypes.bool,
   children: PropTypes.node
};
