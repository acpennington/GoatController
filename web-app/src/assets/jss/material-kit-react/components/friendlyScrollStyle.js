import scrollStyle from "../scrollStyle.js";

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

const childrenContainer = {
   display: "flex",
   flexDirection: "column-reverse",
   width: "100%",
   maxHeight: "100%",
   overflowX: "auto",
   overflowY: "auto",
   ...scrollStyle
};

const friendlyScrollStyle = {
   wholeContainer: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
   },
   btnLeft: {
      left: "2px",
      ...buttonStyle
   },
   btnRight: {
      right: "2px",
      ...buttonStyle
   },
   btnTop: {
      top: "2px",
      right: "10px",
      ...buttonStyle
   },
   btnBottom: {
      bottom: "2px",
      right: "10px",
      ...buttonStyle
   },
   childrenContainer,
   childrenContainerHoriz: {
      ...childrenContainer,
      flexDirection: "row-reverse"
   }
};

export default friendlyScrollStyle;
