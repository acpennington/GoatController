import scrollStyle from "./scrollStyle.js";

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
      width: "100%",
      overflow: "hidden"
   },
   btnLeft: {
      left: "2px",
      ...buttonStyle
   },
   btnRight: {
      right: "2px",
      ...buttonStyle
   },
   btnBottom: {
      bottom: "2px",
      right: "10px",
      ...buttonStyle
   },
   childrenContainer: {
      display: "flex",
      flexDirection: "column-reverse",
      width: "100%",
      maxHeight: "100%",
      overflowX: "auto",
      overflowY: "auto",
      ...scrollStyle
   }
};

export default friendlyScrollStyle;
