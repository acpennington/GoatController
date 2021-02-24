const cardStyle = {
   container: {
      position: "relative"
   },
   background: {
      backgroundRepeat: "repeat",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "3px",
      position: "absolute",
      zIndex: -1
   },
   sideBySide: {
      display: "flex"
   },
   icon: {
      flex: "99%",
      position: "relative",
      float: "left",
      marginLeft: "5px",
      zIndex: 3
   },
   subtitle: {
      flex: "1%",
      position: "relative",
      float: "right",
      zIndex: 3,
      marginRight: "5px"
   },
   name: {
      overflowWrap: "break-word",
      position: "absolute",
      letterSpacing: "-0.5px",
      marginTop: "5px",
      marginLeft: "5px",
      zIndex: 1
   },
   art: {
      position: "absolute",
      marginTop: "2px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2
   },
   monsterStats: {
      position: "absolute",
      textAlign: "center",
      width: "100%",
      color: "black"
   }
};

export default cardStyle;
