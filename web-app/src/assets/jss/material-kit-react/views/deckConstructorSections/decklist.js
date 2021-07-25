const decklistStyles = {
   container: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
   },
   resizeCards: {
      flex: "0%",
      textAlign: "center",
      maxHeight: "2em",
      marginBottom: "2px"
   },
   allCards: {
      flex: "100%",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.85)",
      borderRadius: "3px",
      padding: "3px"
   },
   deckLabel: {
      width: "100%",
      textAlign: "center"
   },
   listContainer: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      width: "100%",
      minHeight: "120px"
   }
};

export default decklistStyles;
