import scrollStyle from "../scrollStyle.js";
import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const wallStyle = {
   container: {
      overflowY: "auto",
      overflowX: "hidden",
      padding: "5px"
   },
   post: {
      backgroundColor: "rgb(36,37,38)",
      padding: "8px",
      marginBottom: "8px",
      borderRadius: "15px"
   },
   header: {
      borderBottom: "1px solid rgb(230,230,230)",
      display: "flex"
   },
   avatar: {
      margin: "5px",
      height: "40px",
      width: "40px",
      borderRadius: "20px",
      backgroundPosition: "center",
      backgroundSize: "cover"
   },
   namedate: {},
   content: {
      marginTop: "3px"
   },
   ...tooltip
};

export default wallStyle;
