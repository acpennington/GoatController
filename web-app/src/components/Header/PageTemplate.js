import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/pageTemplateStyle.js";

class PageTemplate extends Component {
   constructor(props) {
      super(props);
      if (!this.props.noToken) checkToken();

      const storage = window.sessionStorage;
      this.username = storage.getItem("username");
      this.goatGold = storage.getItem("goatGold");
      setBodyImage();
   }

   render() {
      const { classes, gap, addFooter, children } = this.props;

      return (
         <div>
            <Header
               absolute
               color="transparent"
               loggedInAs={this.username}
               rightLinks={<HeaderLinks loggedInAs={this.username} goatGold={this.goatGold} />}
               fixed
               changeColorOnScroll={{
                  height: 100,
                  color: "semitransparent"
               }}
            />
            <div className={classes.pageHeader}>
               <div className={classes.container}>
                  <div style={gap ? {} : { marginTop: "-5vh", marginBottom: "-100%" }}>{children}</div>
               </div>
               {addFooter && <Footer whitefont />}
            </div>
         </div>
      );
   }
}

PageTemplate.propTypes = {
   classes: PropTypes.object.isRequired,
   noToken: PropTypes.bool,
   gap: PropTypes.bool,
   addFooter: PropTypes.bool,
   children: PropTypes.element.isRequired
};

export default withStyles(styles)(PageTemplate);
