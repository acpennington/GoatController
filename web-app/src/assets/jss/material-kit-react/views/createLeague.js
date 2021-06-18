import styles from "./commonPages.js";

const createLeagueStyle = {
   ...styles,
   title: {
      textAlign: "center",
      marginBottom: "30px"
   },
   center: {
      textAlign: "center"
   },
   leagueid: {
      marginTop: "20px",
      textAlign: "center"
   },
   errors: {
      color: "red",
      marginBottom: "10px"
   },
   bottom: {
      textAlign: "center",
      margin: "20px 0px"
   },
   cardFooter: {
      ...styles.cardFooter,
      textAlign: "center",
      padding: "0.9375rem 1.875rem"
   }
};

export default createLeagueStyle;
