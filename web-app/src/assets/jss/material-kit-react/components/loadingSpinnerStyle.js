const centerPosition = {
   position: "absolute",
   height: "42vh",
   width: "42vw"
};

const spinnerStyle = {
   container: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
   },
   "@keyframes spin": {
      "0%": {
         transform: "rotate(0deg)"
      },
      "90%": {
         transform: "rotate(360deg)"
      },
      "100%": {
         transform: "rotate(360deg)"
      }
   },
   spinner: {
      ...centerPosition,
      backgroundImage: 'url("/Goat_Token_Logo.svg")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      animationName: "$spin",
      animationDuration: "2s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite"
   },
   message: {
      ...centerPosition,
      textAlign: "center",
      lineHeight: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
   }
};

export default spinnerStyle;
