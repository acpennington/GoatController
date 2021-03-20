import { BORDER_COLOR } from "utils/constants.js";

const container = {
   margin: "1px",
   position: "relative",
   backgroundColor: "rgba(0,0,0,0.82)",
   borderRadius: "5px",
   borderStyle: "solid",
   borderWidth: "3px",
   borderColor: BORDER_COLOR,
   padding: "1px",
   overflow: "hidden",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   userSelect: "none"
};

const name = {
   fontWeight: 400,
   overflowWrap: "break-word",
   position: "absolute",
   letterSpacing: "-0.2px",
   zIndex: 1
};

const cardStyle = {
   container,
   containerDef: {
      ...container,
      transform: "rotate(90deg)"
   },
   sideBySide: {
      display: "flex"
   },
   icon: {
      flex: "99%",
      position: "relative",
      float: "left",
      zIndex: 3,
      filter: "drop-shadow(0px 0px 3px black)"
   },
   subtitle: {
      flex: "1%",
      position: "relative",
      float: "right",
      zIndex: 3,
      filter: "drop-shadow(0px 0px 3px black)"
   },
   nameMon: {
      ...name,
      color: "black",
      filter: "drop-shadow(0px 0px 5px white)"
   },
   nameST: {
      ...name,
      color: "white",
      filter: "drop-shadow(0px 0px 5px black)"
   },
   art: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      paddingTop: "100%",
      transform: "translate(-50%, -50%)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderTop: "2px solid " + BORDER_COLOR,
      borderBottom: "2px solid " + BORDER_COLOR,
      zIndex: 2
   },
   monsterStats: {
      fontWeight: 400,
      position: "absolute",
      textAlign: "center",
      width: "100%",
      color: "black",
      bottom: "0px",
      marginBottom: "3%",
      filter: "drop-shadow(0px 0px 6px white)"
   },
   zoneLabel: {
      position: "absolute",
      textAlign: "center",
      filter:
         "drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 100
   }
};

export default cardStyle;
