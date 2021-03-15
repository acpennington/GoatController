import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const allContainers = {
   position: "absolute",
   right: 0,
   flex: "10%",
   display: "flex",
   flexDirection: "column",
   marginLeft: "4px",
   height: "100%",
   width: "16%"
};

const rightToolsStyle = {
   container: {
      justifyContent: "center",
      ...allContainers
   },
   modalContainer: {
      backgroundColor: "rgba(0, 0, 0, 0.82)",
      ...allContainers
   },
   header: {
      width: "100%",
      padding: "5px",
      border: "solid 1px white",
      textAlign: "center"
   },
   footer: {
      position: "absolute",
      width: "100%",
      padding: "5px",
      border: "solid 1px white",
      bottom: 0,
      textAlign: "center",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("/cards/art/Metamorphosis.jpg")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
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
