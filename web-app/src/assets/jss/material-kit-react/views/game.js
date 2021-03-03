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
      width: "100%",
      marginRight: "4px",
      height: "100%"
   },
   gameplay: {
      flex: "75%",
      overflow: "hidden",
      width: "100%"
   },
   gameplayContainer: {
      display: "flex",
      height: "100%",
      width: "100%"
   },
   cardsInPlay: {
      flex: "90%",
      width: "90%"
   },
   rightTools: {
      flex: "10%",
      borderLeftStyle: "solid",
      borderLeftWidth: "3px",
      borderLeftColor: "black",
      height: "100%",
      width: "100%"
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
   },
   card: {
      flex: 100 / 7 + "%"
   }
};

export default gameStyle;
