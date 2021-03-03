import scrollStyle from "../components/scrollStyle.js";

const buttonSize = 24;

const buttonStyle = {
   position: "absolute",
   width: buttonSize,
   height: buttonSize,
   borderRadius: buttonSize / 2,
   zIndex: 99,
   opacity: 0.8,
   margin: "auto",
   padding: 0,
   color: "white",
   backgroundColor: "black",
   borderStyle: "solid",
   borderColor: "black"
};

const friendlyScrollStyle = {
   wholeContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%"
   },
   btnLeft: {
      left: "0%",
      marginLeft: "2px",
      ...buttonStyle
   },
   btnRight: {
      right: "0%",
      marginRight: "2px",
      ...buttonStyle
   },
   btnTop: {
      top: "0%",
      marginTop: "2px",
      ...buttonStyle
   },
   btnBottom: {
      bottom: "0%",
      marginBottom: "2px",
      ...buttonStyle
   },
   childrenContainer: {
      display: "flex",
      margin: "auto",
      width: "100%",
      overflowX: "auto",
      overflowY: "auto",
      ...scrollStyle
   }
};

export default friendlyScrollStyle;
