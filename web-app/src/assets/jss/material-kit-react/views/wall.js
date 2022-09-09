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
      borderRadius: "3px"
   },
   header: {
      width: "100%",
      borderBottom: "2px solid black",
      margin: "0px",
      padding: "2px",
      textAlign: "center"
   },
   text: {
      width: "100%"
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
      top: "0",
      left: "0",
      zIndex: "1"
   },
   ...commonDeckConstructor,
   ...tooltip
};

export default wallStyle;
