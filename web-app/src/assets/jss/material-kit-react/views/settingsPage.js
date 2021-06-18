import styles from "./commonPages.js";

const settingsStyle = {
   ...styles,
   centerFlex: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px"
   },
   cardFooter: {
      ...styles.cardFooter,
      textAlign: "center",
      padding: "0.9375rem 1.875rem"
   }
};

export default settingsStyle;
