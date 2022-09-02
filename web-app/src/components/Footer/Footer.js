/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";

import { MdFavorite } from "react-icons/md";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
   const classes = useStyles();
   const { whiteFont } = props;
   const footerClasses = classNames({
      [classes.footer]: true,
      [classes.footerWhiteFont]: whiteFont
   });
   return (
      <footer className={footerClasses}>
         <div className={classes.container}>
            <div className={classes.right} style={{ width: "100%", borderRadius: "10px", backgroundColor: "rgba(0,0,0,0.5)" }}>
               Best viewed in Chrome, Edge, or any Chromium-based web browser. Make sure your browser is up to date!
               <br />
               &copy; {1900 + new Date().getYear()}, made with <MdFavorite className={classes.icon} /> by ACP {"&"} the Goat Format community
            </div>
         </div>
      </footer>
   );
}

Footer.propTypes = {
   whiteFont: PropTypes.bool
};
