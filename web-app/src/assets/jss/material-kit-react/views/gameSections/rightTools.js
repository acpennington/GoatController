import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const allContainers = {
   position: "absolute",
   right: 0,
   flex: "10%",
   display: "flex",
   flexDirection: "column",
   marginLeft: "4px",
   height: "100%",
   width: "15%",
   borderRadius: "3px",
   textAlign: "center"
};

const header = {
   width: "100%",
   padding: "8px 5px",
   border: "solid 2px black",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   borderRadius: "3px"
};

const footer = {
   ...header,
   position: "absolute",
   width: "100%",
   bottom: 0,
   padding: "5px"
};

const activePhase = {
   borderStyle: "solid",
   borderWidth: "3px",
   borderColor: "white"
};

const rightToolsStyle = {
   container: {
      justifyContent: "center",
      ...allContainers
   },
   modalContainer: {
      backgroundColor: "rgba(0, 0, 0, 0.82)",
      ...allContainers
   },
   headergraveyard: {
      ...header,
      backgroundPosition: "50% 95%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/cards/art/CalloftheHaunted.jpg")'
   },
   headerbanished: {
      ...header,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/DimensionFusion.jpg")'
   },
   headerdeck: {
      ...header,
      backgroundPosition: "50% 95%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/cards/art/CardShuffle.jpg")'
   },
   headerFusion: {
      ...header,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/Polymerization.jpg")'
   },
   footerFusion: {
      ...footer,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("/cards/art/Metamorphosis.jpg")'
   },
   footergraveyard: {
      ...footer,
      backgroundPosition: "50% 10%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/KycootheGhostDestroyer.jpg")'
   },
   footerbanished: {
      ...footer,
      backgroundPosition: "50% 40%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/ReturnfromtheDifferentDimension.jpg")'
   },
   footerdeck: {
      ...footer,
      backgroundPosition: "50% 40%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/ReinforcementoftheArmy.jpg")'
   },
   cards: {
      display: "flex",
      justifyContent: "center"
   },
   LPbutton: {
      marginRight: "3px"
   },
   LPbox: {
      marginRight: "3px"
   },
   inactivePhase: {
      opacity: 0.8
   },
   activePhase: {
      ...activePhase
   },
   "@keyframes flash": {
      "50%": {
         borderColor: "rgb(12,255,12)"
      }
   },
   nextTurnFlashing: {
      ...activePhase,
      animationName: "$flash",
      animationDuration: "0.5s",
      animationTimingFunction: "step-start",
      animationIterationCount: "infinite"
   },
   ...tooltip
};

export default rightToolsStyle;
