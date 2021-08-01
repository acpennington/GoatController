import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

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
   header: {
      width: "100%",
      padding: "8px 5px",
      border: "solid 2px black",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "3px",
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/cards/art/ReinforcementoftheArmy.jpg")'
   },
   cards: {
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      flexFlow: "row wrap"
   },
   ...tooltip
};

export default searchResultsStyle;
