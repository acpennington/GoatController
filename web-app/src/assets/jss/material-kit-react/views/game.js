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
      marginRight: "5px",
      height: "100%"
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
   chat: {
      borderRadius: "3px",
      marginTop: "8px",
      padding: "5px",
      backgroundColor: "rgba(0,0,0,0.9)",
      width: "100%",
      height: "calc(60% - 8px)"
   },
   cardRow: {
      display: "flex",
      width: "100%"
   },
   card: {
      flex: 100 / 7 + "%"
   }
};

export default gameStyle;
