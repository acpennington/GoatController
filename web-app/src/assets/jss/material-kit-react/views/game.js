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
      width: "25%",
      marginRight: "4px",
      height: "100%"
   },
   gameplay: {
      flex: "75%",
      width: "75%",
      overflow: "hidden"
   },
   gameplayContainer: {
      flex: "75%",
      width: "75%",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      height: "100%"
   },
   cardsInPlay: {
      position: "relative",
      flex: "85.5%",
      width: "85.5%",
      maxWidth: "85.5%"
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
      display: "flex",
      width: "100%",
      margin: "auto",
      overflowX: "auto",
      overflowY: "hidden"
   },
   hand: {
      display: "flex",
      margin: "auto"
   }
};

export default gameStyle;
