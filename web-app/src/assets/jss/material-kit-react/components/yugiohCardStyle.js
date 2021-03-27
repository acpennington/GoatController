import { BORDER_COLOR } from "utils/constants.js";

const container = {
   margin: "1px",
   position: "relative",
   backgroundColor: "rgba(0,0,0,0.82)",
   borderRadius: "3px",
   borderStyle: "solid",
   borderWidth: "0px",
   borderColor: BORDER_COLOR,
   padding: "1px",
   overflow: "hidden",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   userSelect: "none"
};

const icons = {
   position: "relative",
   zIndex: 3,
   textAlign: "center",
   filter: "drop-shadow(0px 0px 2px white)",
   "& img": {
      margin: ".45%"
   }
};

const name = {
   top: 0,
   left: 0,
   fontWeight: 400,
   overflowWrap: "break-word",
   position: "absolute",
   letterSpacing: "0.2px",
   zIndex: 3,
   textAlign: "center",
   width: "100%",
   padding: "5%",
   color: "white",
   filter: "drop-shadow(0px 0px 5px black) drop-shadow(0px 0px 5px black) drop-shadow(0px 0px 5px black)"
};

const monsterStats = {
   position: "absolute",
   bottom: 0,
   left: 0,
   display: "flex",
   justifyContent: "center",
   fontWeight: 400,
   textAlign: "center",
   width: "100%",
   height: "calc(50% - 1.5px)",
   color: "black",
   filter: "drop-shadow(0px 0px 6px white)"
};

const zoneLabel = {
   position: "absolute",
   textAlign: "center",
   filter:
      "drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black)",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   zIndex: 100
};

const cardStyle = {
   container: {
      ...container,
      top: "100%",
      transform: "translateY(-100%)"
   },
   containerVillain: {
      ...container,
      top: "100%",
      transform: "translateY(-100%) rotate(180deg)"
   },
   containerDef: {
      ...container,
      transform: "rotate(90deg)"
   },
   iconsMon: {
      paddingTop: "3%",
      ...icons
   },
   iconsST: {
      paddingTop: "14%",
      ...icons
   },
   name,
   nameVillain: {
      ...name,
      transform: "rotate(180deg)"
   },
   art: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      paddingTop: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderTop: "3px solid #6b6d6e",
      borderLeft: "3px solid #6b6d6e",
      borderBottom: "3px solid #535351",
      borderRight: "3px solid #535351",
      zIndex: 2
   },
   lowerHalf: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "29%",
      border: "3px solid rgba(0,0,0,0.3)"
   },
   monsterStats,
   monsterStatsVillain: {
      ...monsterStats,
      paddingTop: "5%",
      transform: "rotate(180deg)"
   },
   statBox: {
      fontFamily: "Matrix",
      fontWeight: 500,
      margin: "0% 5%",
      width: "40%",
      textAlign: "center"
   },
   zoneLabel,
   zoneLabelVillain: {
      ...zoneLabel,
      transform: "translate(-50%, -50%) rotate(180deg)"
   }
};

export default cardStyle;
