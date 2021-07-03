import styles from "./commonPages.js";

const createLeagueStyle = {
   ...styles,
   title: {
      textAlign: "center",
      marginBottom: "30px"
   },
   logo: {
      height: "28px",
      width: "28px",
      borderRadius: "100px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      filter: "drop-shadow(0px 0px 3px black)"
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
