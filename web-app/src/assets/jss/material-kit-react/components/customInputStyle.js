import { primaryColor, dangerColor, successColor, defaultFont } from "assets/jss/material-kit-react.js";

const customInputStyle = {
   disabled: {
      "&:before": {
         borderColor: "transparent !important"
      }
   },
   underline: {
      "&:hover:not($disabled):before,&:before": {
         borderColor: "#D2D2D2 !important",
         borderWidth: "1px !important"
      },
      "&:after": {
         borderColor: primaryColor
      }
   },
   underlineError: {
      "&:after": {
         borderColor: dangerColor
      }
   },
   underlineSuccess: {
      "&:after": {
         borderColor: successColor
      }
   },
   whiteUnderline: {
      "&:hover:not($disabled):before,&:before": {
         borderWidth: 0
      },
      "&:after": {
         borderWidth: 0
      }
   },
   labelRoot: {
      ...defaultFont,
      color: "#AAAAAA !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857",
      top: "10px",
      letterSpacing: "unset",
      "& + $underline": {
         marginTop: "0px"
      }
   },
   labelRootError: {
      color: dangerColor + " !important"
   },
   labelRootSuccess: {
      color: successColor + " !important"
   },
   formControl: {
      margin: "5px 0 5px 0",
      position: "relative",
      "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
         color: "#495057"
      }
   },
   input: {
      color: "#495057",
      height: "unset",
      "&,&::placeholder": {
         fontSize: "14px",
         fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
         fontWeight: "400",
         lineHeight: "1.42857",
         opacity: "1"
      },
      "&::placeholder": {
         color: "#AAAAAA"
      }
   },
   whiteInput: {
      borderStyle: "solid",
      borderWidth: "2px",
      borderRadius: "3px",
      borderColor: "white",
      paddingLeft: "3px",
      paddingRight: "3px",
      "&,&::placeholder": {
         color: "#FFFFFF",
         opacity: "1"
      },
      "&hover,&:focus": {
         borderColor: primaryColor
      }
   }
};

export default customInputStyle;
