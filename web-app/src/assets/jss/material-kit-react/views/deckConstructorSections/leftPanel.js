import importedLeft from "../gameSections/leftPanel.js";
import commonPages from "../commonPages.js";
import commonDeckConstructor from "./deckConstructorCommon.js";

const marginTop = 5;
export const bottomContainer = {
   borderRadius: "3px",
   marginTop,
   padding: "4px 4px 0px 4px",
   backgroundColor: "rgba(0,0,0,0.9)",
   width: "100%",
   height: "calc(60% - " + marginTop + "px)"
};

const leftPanelStyle = {
   ...importedLeft,
   ...commonPages,
   ...commonDeckConstructor,
   bottomContainer,
   descSpan: {
      textAlign: "right",
      paddingRight: "5px"
   },
   betweenSpan: {
      marginLeft: "8px",
      marginRight: "8px",
      paddingTop: "6px",
      flex: "50%",
      textAlign: "center",
      whiteSpace: "nowrap"
   }
};

export default leftPanelStyle;
