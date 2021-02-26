const containerMargin = 6;
const containerMax = "calc(100% - "+2*containerMargin+"px)";

const yugiohCardExpandedStyle = {
   largePic: {
      borderStyle: "solid",
      borderColor: "black",
      borderRadius: "3px",
      position: "relative",
      backgroundColor: "black",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "40%",
   },
   contentContainer: {
      position: "absolute",
      bottom: 0,
      margin: containerMargin,
      maxHeight: containerMax,
      width: containerMax,
      overflow: "auto",
      "&::-webkit-scrollbar": {
         width: "8px"
      },
      "&::-webkit-scrollbar-thumb": {
         background: "#888"
      }
   },
   cardText: {
      borderRadius: "3px",
      padding: "3px",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.85)",
   },
   buttons: {
      display: "flex",
      justifyContent: "center"
   }
};

export default yugiohCardExpandedStyle;
