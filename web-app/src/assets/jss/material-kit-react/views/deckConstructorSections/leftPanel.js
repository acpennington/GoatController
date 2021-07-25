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
   }
};

export default leftPanelStyle;
