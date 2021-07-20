const gameStyle = {
   container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
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
      overflowX: "auto",
      overflowY: "hidden",
   },
   playingField: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      flexFlow: "column wrap",
   },
   cardColumn: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden",
      overflowY: "auto",
   },
   hand: {
      display: "flex",
      margin: "auto",
      position: "relative"
   }
};

export default gameStyle;
