import styles from "./commonPages.js";

const signupPageStyle = {
   cardHidden: {
      opacity: "0",
      transform: "translate3d(0, -60px, 0)"
   },
   socialLine: {
      marginTop: "1rem",
      textAlign: "center",
      padding: "0"
   },
   ...styles
};

export default signupPageStyle;
