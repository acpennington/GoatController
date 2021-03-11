import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const allContainers = {
   flex: "10%",
   marginLeft: "4px",
   height: "100%",
   width: "10%",
   borderRadius: "3px"
};

const rightToolsStyle = {
   container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      ...allContainers
   },
   modalContainer: {
      ...allContainers,
      backgroundColor: "rgba(0, 0, 0, 0.8)"
   },
   header: {
      width: "100%",
      padding: "5px",
      border: "solid 1px white",
      textAlign: "center",
      marginBottom: "5px"
   },
   cards: {
      display: "flex",
      justifyContent: "center"
   },
   LPbutton: {
      marginRight: "3px"
   },
   LPbox: {
      marginRight: "3px"
   },
   ...tooltip
};

export default rightToolsStyle;
