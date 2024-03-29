import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "components/Tooltip/PatchedTooltip.js";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

class NavButton extends PureComponent {
   render() {
      const { classes, href, tip, children } = this.props;

      if (!href || tip)
         return (
            <Tooltip id={href} title={tip || "Coming soon!"} classes={{ tooltip: classes.tooltip }}>
               <Button color={href && "primary"} size="lg" round className={classes.fullButton} href={href}>
                  {children}
               </Button>
            </Tooltip>
         );
      else
         return (
            <Button color="primary" size="lg" round className={classes.fullButton} href={href}>
               {children}
            </Button>
         );
   }
}

NavButton.propTypes = {
   classes: PropTypes.object.isRequired,
   href: PropTypes.string,
   tip: PropTypes.string,
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default withStyles(styles)(NavButton);
