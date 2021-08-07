import styles from "./commonPages.js";
import importedLeft from "./gameSections/leftPanel.js";
import importedBottom from "./deckConstructorSections/leftPanel.js";

import { LEFT_PANEL_SIZE } from "utils/constants";

const fusionsWidth = 100 - LEFT_PANEL_SIZE + "%";

const fusionsPageStyle = {
   ...styles,
   ...importedLeft,
   ...importedBottom,
   container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      width: fusionsWidth,
      flex: fusionsWidth
   }
};

export default fusionsPageStyle;
