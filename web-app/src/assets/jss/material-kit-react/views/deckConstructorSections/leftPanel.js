import importedLeft from "../gameSections/leftPanel";

const marginTop = 5;

const leftPanelStyle = {
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
   newDeck: {
      marginTop: "3px",
      display: "flex",
      flexDirection: "row"
   },
   byName: {
      display: "flex",
      flexDirection: "row"
   },
   quickFind: {
      textAlign: "right",
      paddingRight: "5px"
   }
};

export default leftPanelStyle;
