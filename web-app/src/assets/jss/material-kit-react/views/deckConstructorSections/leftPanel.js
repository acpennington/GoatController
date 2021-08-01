import importedLeft from "../gameSections/leftPanel.js";
import commonPages from "../commonPages.js";

const marginTop = 5;

const leftPanelStyle = {
   ...commonPages,
   ...importedLeft,
   bottomContainer: {
      borderRadius: "3px",
      marginTop,
      padding: "4px 4px 0px 4px",
      backgroundColor: "rgba(0,0,0,0.9)",
      width: "100%",
      height: "calc(60% - " + marginTop + "px)"
   },
   deckSelector: {
      marginBottom: "10px"
   },
   buttonRow: {
      marginBottom: "5px"
   },
   flexRow: {
      marginTop: "5px",
      marginBottom: "5px",
      marginLeft: "2px",
      marginRight: "2px",
      display: "flex",
      flexDirection: "row"
   },
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
