import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const allContainers = {
   position: "absolute",
   right: 0,
   flex: "10%",
   display: "flex",
   flexDirection: "column",
   marginLeft: "4px",
   height: "100%",
   width: "16%",
   borderRadius: "3px"
};

const header = {
   width: "100%",
   padding: "8px 5px",
   border: "solid 2px black",
   textAlign: "center",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   borderRadius: "3px"
};

const footer = {
   position: "absolute",
   width: "100%",
   bottom: 0,
   ...header,
   padding: "5px"
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
   headergraveyard: {
      ...header,
      backgroundPosition: "50% 95%",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/cards/art/CalloftheHaunted.jpg")'
   },
   headerbanished: {
      ...header,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/DimensionFusion.jpg")'
   },
   headerExtra: {
      ...header,
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/cards/art/Polymerization.jpg")'
   },
   footerExtra: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("/cards/art/Metamorphosis.jpg")',
      ...footer
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