import { container } from "assets/jss/material-kit-react.js";

const pageTemplateStyle = {
   container: {
      ...container,
      zIndex: "2",
      position: "relative",
      paddingTop: "20vh",
      color: "#FFFFFF",
      paddingBottom: "200px"
   },
   pageHeader: {
      minHeight: "100vh",
      height: "auto",
      display: "inherit",
      position: "relative",
      margin: "0",
      padding: "0",
      border: "0",
      alignItems: "center",
      "&:before,&:after": {
         position: "absolute",
         zIndex: "1",
         width: "100%",
         height: "100%",
         display: "block",
         left: "0",
         top: "0",
         content: '""'
      },
      "& footer li a,& footer li a:hover,& footer li a:active": {
         color: "#FFFFFF"
      },
      "& footer": {
         position: "absolute",
         bottom: "0",
         width: "100%"
      }
   }
};

export default pageTemplateStyle;
