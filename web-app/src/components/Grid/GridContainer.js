import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const styles = {
   grid: {
      marginRight: "-15px",
      marginLeft: "-15px",
      width: "auto"
   }
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
   const classes = useStyles();
   const { children, className, ...rest } = props;
   return (
      <Grid container {...rest} className={classes.grid + " " + className}>
         {children}
      </Grid>
   );
}

GridContainer.defaultProps = {
   className: ""
};

GridContainer.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string
};
