import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";
import { BANISHED, DECK, EXTRA_DECK, GRAVEYARD, RIGHT_PANEL_SIZE } from "shared/constants.js";

const allContainers = {
   position: "relative",
   flex: RIGHT_PANEL_SIZE + "%",
   display: "flex",
   flexDirection: "column",
   height: "100%",
   width: RIGHT_PANEL_SIZE + "%",
   borderRadius: "3px",
   textAlign: "center",
   marginLeft: "3px"
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
   ["header" + GRAVEYARD]: {
      ...header,
      backgroundPosition: "50% 95%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/cards/art/CalloftheHaunted.jpg")'
   },
   ["header" + BANISHED]: {
      ...header,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/DimensionFusion.jpg")'
   },
   ["header" + DECK]: {
      ...header,
      backgroundPosition: "50% 95%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/cards/art/CardShuffle.jpg")'
   },
   ["header" + EXTRA_DECK]: {
      ...header,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/Polymerization.jpg")'
   },
   ["footer" + EXTRA_DECK]: {
      ...footer,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.85)), url("/cards/art/Metamorphosis.jpg")'
   },
   ["footer" + GRAVEYARD]: {
      ...footer,
      backgroundPosition: "50% 10%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/KycootheGhostDestroyer.jpg")'
   },
   ["footer" + BANISHED]: {
      ...footer,
      backgroundPosition: "50% 40%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/ReturnfromtheDifferentDimension.jpg")'
   },
   ["footer" + DECK]: {
      ...footer,
      backgroundPosition: "50% 40%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/ReinforcementoftheArmy.jpg")'
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
