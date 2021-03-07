import { BORDER_COLOR } from "utils/constants.js";

const cardStyle = {
   container: {
      position: "relative",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "3px",
      borderColor: BORDER_COLOR,
      padding: "1px",
      overflow: "hidden",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
   },
   sideBySide: {
      display: "flex"
   },
   icon: {
      flex: "99%",
      position: "relative",
      float: "left",
      zIndex: 3
   },
   subtitle: {
      flex: "1%",
      position: "relative",
      float: "right",
      zIndex: 3
   },
   name: {
      overflowWrap: "break-word",
      position: "absolute",
      letterSpacing: "-0.5px",
      zIndex: 1
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
      position: "absolute",
      textAlign: "center",
      width: "100%",
      color: "black",
      bottom: "0px",
      marginBottom: "3%"
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
