const borderColor = "rgb(5,10,30)";
const monsterColor = "rgb(155,86,31)";
const stColor = "rgb(21,115,78) rgb(126,38,98) rgb(126,38,98) rgb(21,115,78)";
const fieldColor = "rgb(21,115,78)";

const container = {
   margin: "1px",
   position: "relative",
   top: 0,
   backgroundColor: "rgba(0,0,0,0.8)",
   borderRadius: "3px",
   borderStyle: "solid",
   borderWidth: "0px",
   borderColor,
   padding: "1px",
   overflow: "hidden",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   userSelect: "none"
};

const icons = {
   position: "absolute",
   width: "100%",
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
   left: 0,
   top: "90%",
   transform: "translateY(-90%)",
   display: "flex",
   justifyContent: "center",
   fontWeight: 400,
   textAlign: "center",
   width: "100%",
   color: "black",
   filter: "drop-shadow(0px 0px 6px white)"
};

const zoneLabel = {
   position: "absolute",
   textAlign: "center",
   filter: "drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black)",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   zIndex: 100
};

const secondaryLabel = {
   position: "absolute",
   filter: "drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black) drop-shadow(0px 0px 6px black)",
   top: "0%",
   right: "0%",
   padding: "5px",
   zIndex: 100
};

const cardStyle = {
   container: {
      ...container
   },
   containerHand: {
      ...container
   },
   containerMon: {
      ...container,
      borderColor: monsterColor
   },
   containerST: {
      ...container,
      borderColor: stColor
   },
   containerField: {
      ...container,
      borderColor: fieldColor
   },
   containerVillain: {
      ...container,
      transform: "rotate(180deg)"
   },
   containerVillainHand: {
      ...container,
      top: "100%",
      transform: "translateY(-100%) rotate(180deg)"
   },
   containerVillainMon: {
      ...container,
      transform: "rotate(180deg)",
      borderColor: monsterColor
   },
   containerVillainST: {
      ...container,
      transform: "rotate(180deg)",
      borderColor: stColor
   },
   containerVillainField: {
      ...container,
      transform: "rotate(180deg)",
      borderColor: fieldColor
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
      border: "3px solid rgba(0,0,0,0.3)",
      borderColor: "rgba(0,0,0,0) rgba(0,0,0,0.3) rgba(0,0,0,0.3) rgba(0,0,0,0.3)"
   },
   monsterStats,
   monsterStatsVillain: {
      ...monsterStats,
      transform: "translateY(-90%) rotate(180deg)"
   },
   statBox: {
      fontFamily: "Matrix",
      fontWeight: 500,
      margin: "0% 5%",
      paddingTop: "3%",
      paddingBottom: "3%",
      width: "40%",
      textAlign: "center"
   },
   zoneLabel,
   zoneLabelVillain: {
      ...zoneLabel,
      transform: "translate(-50%, -50%) rotate(180deg)"
   },
   zoneLabelCounters: {
      ...zoneLabel,
      filter: "",
      padding: "15%",
      borderRadius: "100%",
      backgroundColor: "rgba(0,120,0,0.72)"
   },
   zoneLabelVillainCounters: {
      ...zoneLabel,
      filter: "",
      padding: "15%",
      borderRadius: "100%",
      backgroundColor: "rgba(0,120,0,0.72)",
      transform: "translate(-50%, -50%) rotate(180deg)"
   },
   secondaryLabel,
   secondaryLabelVillain: {
      ...secondaryLabel,
      transform: "rotate(180deg)"
   },
   "@keyframes foil": {
      "0%": {
         opacity: 0,
         transform: "rotate(0deg)"
      },
      "50%": {
         opacity: 1,
         transform: "rotate(360deg)"
      },
      "100%": {
         opacity: 0,
         transform: "rotate(720deg)"
      }
   },
   star: {
      position: "absolute",
      animationName: "$foil",
      animationDuration: "5s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite"
   },
   battleImg: {
      opacity: 0.9,
      width: "100%"
   }
};

export default cardStyle;
