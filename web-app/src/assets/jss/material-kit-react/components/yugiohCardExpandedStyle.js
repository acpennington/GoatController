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
      height: "40%"
   },
   cardText: {
      borderRadius: "3px",
      position: "absolute",
      bottom: 0,
      overflow: "auto",
      margin: "6px",
      padding: "3px",
      maxHeight: "calc(100% - 12px)",
      backgroundColor: "rgba(0,0,0,0.85)",
      "&::-webkit-scrollbar": {
         width: "8px"
      },
      "&::-webkit-scrollbar-thumb": {
         background: "#888"
      }
   }
};

export default yugiohCardExpandedStyle;
