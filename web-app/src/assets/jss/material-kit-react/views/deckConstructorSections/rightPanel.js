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
      position: "relative"
   },
   header: {
      width: "100%",
      padding: "8px 5px",
      border: "solid 2px black",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "3px",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/ReinforcementoftheArmy.jpg")'
   },
   deckSelector: {
      marginTop: "10px",
      marginBottom: "10px"
   },
   ...tooltip
};

export default rightPanelStyle;
