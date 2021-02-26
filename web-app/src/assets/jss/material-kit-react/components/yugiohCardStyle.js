const cardStyle = {
   container: {
      position: "relative",
      backgroundColor: "rgba(0,0,0,0.8)",
      backgroundRepeat: "repeat",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "3px",
      padding: "1px",
      overflow: "hidden"
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
      zIndex: 1
   },
   art: {
      position: "absolute",
      marginTop: "2px",
      top: "50%",
      left: "50%",
      width: "100%",
      paddingTop: "100%",
      transform: "translate(-50%, -50%)",
      backgroundPosition: "center",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      zIndex: 2
   },
   monsterStats: {
      position: "absolute",
      textAlign: "center",
      width: "100%",
      color: "black",
      bottom: "0px",
      marginBottom: "3%"
   }
};

export default cardStyle;
