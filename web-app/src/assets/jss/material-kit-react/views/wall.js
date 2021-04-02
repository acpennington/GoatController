import scrollStyle from "../scrollStyle.js";

const wallStyle = {
   container: {
      height: "75vh",
      overflowY: "auto",
      overflowX: "hidden",
      ...scrollStyle
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
   }
};

export default wallStyle;
