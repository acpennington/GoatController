import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { MdMenu } from "react-icons/md";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
const useStyles = makeStyles(styles);

export default function Header(props) {
   const classes = useStyles();
   const [mobileOpen, setMobileOpen] = React.useState(false);
   React.useEffect(() => {
      if (props.changeColorOnScroll) {
         window.addEventListener("scroll", headerColorChange);
      }
      return function cleanup() {
         if (props.changeColorOnScroll) {
            window.removeEventListener("scroll", headerColorChange);
         }
      };
   });
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };
   const headerColorChange = () => {
      const { color, changeColorOnScroll } = props;
      const windowsScrollTop = window.pageYOffset;
      if (windowsScrollTop > changeColorOnScroll.height) {
         document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
         document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
      } else {
         document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
         document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
      }
   };
   const { color, rightLinks, fixed, absolute } = props;
   const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
   });

   const clientWidth = document.documentElement.clientWidth;

   const brandComponent = (
      <Button href={props.loggedInAs ? "/wall" : "/"} className={classes.title}>
         <img src="Goat_Token_Logo.svg" style={{ height: "2.4em", marginRight: "8px" }} alt="Goat Duels logo" />
         Goat Duels
         {clientWidth > 1205 && ": A Dueling Simulator Just for Goat Format!"}
      </Button>
   );

   return (
      <AppBar className={appBarClasses}>
         <Toolbar className={classes.container}>
            {brandComponent}
            {clientWidth > 900 ? (
               rightLinks
            ) : (
               <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
                  <MdMenu />
               </IconButton>
            )}
         </Toolbar>
         {clientWidth < 900 && (
            <Drawer
               variant="temporary"
               anchor={"right"}
               open={mobileOpen}
               classes={{
                  paper: classes.drawerPaper
               }}
               onClose={handleDrawerToggle}
            >
               <div className={classes.appResponsive}>{rightLinks}</div>
            </Drawer>
         )}
      </AppBar>
   );
}

Header.defaultProp = {
   color: "white"
};

Header.propTypes = {
   color: PropTypes.string,
   rightLinks: PropTypes.node,
   loggedInAs: PropTypes.string,
   fixed: PropTypes.bool,
   absolute: PropTypes.bool,
   // this will cause the sidebar to change the color from
   // props.color (see above) to changeColorOnScroll.color
   // when the window.pageYOffset is higher or equal to
   // changeColorOnScroll.height and then when it is smaller than
   // changeColorOnScroll.height change it back to
   // props.color (see above)
   changeColorOnScroll: PropTypes.shape({
      height: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
   })
};
