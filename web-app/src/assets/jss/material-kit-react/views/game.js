const gameStyle = {
   container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      backgroundColor: "black",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100vw",
      height: "100vh"
   },
   innerContainer: {
      display: "flex"
   },
   leftPanel: {
      flex: "25%",
      backgroundColor: "rgba(0,0,0,0.9)",
      width: "100%",
      marginRight: "5px"
   },
   gameplay: {
      flex: "75%",
      overflow: "hidden"
   },
   gameplayContainer: {
      display: "flex",
      height: "100%"
   },
   cardsInPlay: {
      flex: "90%"
   },
   rightTools: {
      flex: "10%",
      backgroundColor: "green",
      height: "100%"
   },
   largePic: {
      position: "relative",
      backgroundColor: "black",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
   },
   cardText: {
      borderRadius: "3px",
      position: "absolute",
      bottom: 0,
      overflow: "auto",
      margin: "5px",
      padding: "3px",
      backgroundColor: "rgba(0,0,0,0.9)",
      "&::-webkit-scrollbar": {
         width: "8px"
      },
      "&::-webkit-scrollbar-thumb": {
         background: "#888"
      }
   },
   chat: {},
   cardRow: {
      display: "flex",
      width: "100%"
   },
   card: {
      flex: 100 / 7 + "%"
   }
};

export default gameStyle;
