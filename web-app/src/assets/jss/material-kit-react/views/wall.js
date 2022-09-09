import commonDeckConstructor from "../views/deckConstructorSections/deckConstructorCommon.js";
import tooltip from "../tooltipsStyle.js";

const wallStyle = {
   grid: {
      margin: "0px"
   },
   bigContainer: {
      width: "calc(100% - 250px)",
      position: "relative",
      float: "right"
   },
   container: {
      overflowY: "auto",
      overflowX: "hidden",
      padding: "5px"
   },
   fullButton: {
      width: "99%"
   },
   gridItem: {
      width: "100%",
      padding: "2px"
   },
   postContainer: {
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.88)",
      border: "2px solid black",
      borderRadius: "3px",
      cursor: "pointer"
   },
   header: {
      width: "100%",
      borderBottom: "2px solid black",
      margin: "0px",
      padding: "2px",
      textAlign: "center"
   },
   text: {
      width: "100%",
      display: "box",
      lineClamp: 10,
      overflow: "hidden",
      textOverflow: " ...Click to read more",
      boxOrient: "vertical",
      padding: "2px"
   },
   video: {
      width: "100%",
      aspectRatio: 16 / 9,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
   },
   playButton: {
      maxWidth: "25%",
      width: "90px"
   },
   link: {
      position: "absolute",
      width: "100%",
      height: "100%",
      bottom: "0",
      left: "0",
      zIndex: "1"
   },
   pagination: {
      width: "100%",
      margin: "15px 0px",
      padding: "3px",
      backgroundColor: "rgba(255,255,255,0.75)",
      display: "flex",
      justifyContent: "center",
      borderRadius: "10px"
   },
   ...commonDeckConstructor,
   ...tooltip
};

export default wallStyle;
