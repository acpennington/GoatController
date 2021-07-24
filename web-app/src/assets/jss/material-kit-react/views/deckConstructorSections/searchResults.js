import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const header = {
   width: "100%",
   padding: "8px 5px",
   border: "solid 2px black",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   borderRadius: "3px"
};

const footer = {
   ...header,
   position: "absolute",
   width: "100%",
   bottom: 0,
   padding: "5px"
};

const searchResultsStyle = {
   container: {
      position: "relative",
      flex: "12%",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "12%",
      borderRadius: "3px",
      textAlign: "center",
      marginLeft: "3px",
      backgroundColor: "rgba(0, 0, 0, 0.82)"
   },
   cards: {
      display: "flex",
      justifyContent: "center"
   },
   ...tooltip
};

export default searchResultsStyle;
