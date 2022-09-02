import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import { GoStar } from "react-icons/go";

import { withStyles } from "@material-ui/core/styles";
import cardStyle from "assets/jss/material-kit-react/components/yugiohCardStyle.js";

class FoilStars extends PureComponent {
   render() {
      const { classes, nameHeight } = this.props;

      return (
         <Fragment>
            <div className={classes.star} style={{ top: "0%", left: "5%" }}>
               <GoStar size={nameHeight + "px"} />
            </div>
            <div className={classes.star} style={{ top: "80%", left: "45%", animationDelay: "1s" }}>
               <GoStar size={nameHeight + "px"} />
            </div>
            <div className={classes.star} style={{ top: "40%", right: "8%", animationDelay: "2s" }}>
               <GoStar size={nameHeight + "px"} />
            </div>
            <div className={classes.star} style={{ top: "55%", left: "20%", animationDelay: "3s" }}>
               <GoStar size={nameHeight + "px"} />
            </div>
            <div className={classes.star} style={{ top: "8%", left: "55%", animationDelay: "4s" }}>
               <GoStar size={nameHeight + "px"} />
            </div>
         </Fragment>
      );
   }
}

FoilStars.propTypes = {
   nameHeight: PropTypes.number.isRequired,
   classes: PropTypes.object.isRequired
};

export default withStyles(cardStyle)(FoilStars);
