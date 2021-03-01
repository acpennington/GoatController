const borderColor = "#292c42";

const cardStyle = {
   container: {
      position: "relative",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "3px",
      borderColor,
      padding: "1px",
      overflow: "hidden",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
   },
   sideBySide: {
      display: "flex"
   },
   icon: {
      flex: "99%",
      position: "relative",
      float: "left",
      zIndex: 3
   },
   subtitle: {
      flex: "1%",
      position: "relative",
      float: "right",
      zIndex: 3
   },
   name: {
      overflowWrap: "break-word",
      position: "absolute",
      letterSpacing: "-0.5px",
      zIndex: 1
   },
   art: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      paddingTop: "100%",
      transform: "translate(-50%, -50%)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderTop: "2px solid " + borderColor,
      borderBottom: "2px solid " + borderColor,
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
