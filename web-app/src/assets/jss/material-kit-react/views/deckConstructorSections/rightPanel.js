import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";
import commonDeckConstructor from "./deckConstructorCommon.js";

import { RIGHT_PANEL_SIZE } from "shared/constants.js";

const rightPanelStyle = {
   ...commonDeckConstructor,
   container: {
      position: "relative",
      flex: RIGHT_PANEL_SIZE + "%",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: RIGHT_PANEL_SIZE + "%",
      borderRadius: "3px",
      textAlign: "center",
      marginLeft: "3px",
      backgroundColor: "rgba(0, 0, 0, 0.82)"
   },
   headerContainer: {
      position: "relative",
      border: "solid 2px black",
      borderRadius: "3px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/ReinforcementoftheArmy.jpg")'
   },
   header: {
      width: "85%",
      padding: "8px 5px"
   },
   deckSelector: {
      marginTop: "10px",
      marginBottom: "10px"
   },
   ...tooltip
};

export default rightPanelStyle;
