import scrollStyle from "../scrollStyle.js";
import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const containerMargin = 6;
const containerMax = "calc(100% - " + 2 * containerMargin + "px)";

const yugiohCardExpandedStyle = {
   largePic: {
      borderStyle: "solid",
      borderColor: "black",
      borderRadius: "3px",
      position: "relative",
      backgroundColor: "rgba(0,0,0,0.85)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "40%",
      width: "100%"
   },
   contentContainer: {
      position: "absolute",
      bottom: 0,
      margin: containerMargin,
      maxHeight: containerMax,
      width: containerMax,
      overflow: "auto",
      ...scrollStyle
   },
   cardText: {
      borderRadius: "3px",
      padding: "3px",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.85)"
   },
   buttons: {
      display: "flex",
      justifyContent: "center"
   },
   underhover: {
      "&:hover": {
         textDecoration: "underline"
      }
   },
   ...tooltip
};

export default yugiohCardExpandedStyle;
