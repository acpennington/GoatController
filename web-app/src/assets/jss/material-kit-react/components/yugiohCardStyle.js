const cardStyle = {
   container: {
      position: "relative"
   },
   svg: {
      position: "absolute",
      zIndex: -1
   },
   icon: {
      position: "relative",
      float: "right",
      margin: "4px",
      zIndex: 3
   },
   name: {
      overflowWrap: "break-word",
      position: "absolute",
      letterSpacing: "-1px",
      marginTop: "5px",
      marginLeft: "5px",
      zIndex: 1
   },
   art: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2
   }
};

export default cardStyle;
