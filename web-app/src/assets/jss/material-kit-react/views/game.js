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
      flex: "23%",
      width: "23%",
      marginRight: "4px",
      height: "100%"
   },
   gameplayContainer: {
      flex: "77%",
      width: "77%",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      height: "100%"
   },
   cardsInPlay: {
      position: "relative",
      flex: "84%",
      width: "84%",
      maxWidth: "84%"
   },
   chat: {
      borderRadius: "3px",
      marginTop: "8px",
      padding: "5px",
      backgroundColor: "rgba(0,0,0,0.9)",
      width: "100%",
      height: "calc(60% - 8px)",
      overflow: "auto",
      display: "flex",
      flexDirection: "column-reverse"
   },
   cardRow: {
      position: "relative",
      display: "flex",
      width: "100%",
      margin: "auto",
      overflowX: "auto",
      overflowY: "hidden",
   },
   hand: {
      display: "flex",
      margin: "auto",
      position: "relative"
   }
};

export default gameStyle;
