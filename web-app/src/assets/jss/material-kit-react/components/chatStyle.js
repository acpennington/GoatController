import scrollStyle from "./scrollStyle.js";

const chatStyle = {
   container: {
      borderRadius: "3px",
      marginTop: "8px",
      padding: "5px 5px 0px 5px",
      backgroundColor: "rgba(0,0,0,0.9)",
      width: "100%",
      height: "calc(60% - 8px)",
      overflow: "auto",
      display: "flex",
      flexDirection: "column-reverse",
      ...scrollStyle
   }
};

export default chatStyle;
