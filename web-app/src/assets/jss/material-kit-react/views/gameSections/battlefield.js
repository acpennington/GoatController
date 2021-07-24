const battlefieldStyle = {
   cardsInPlay: {
      flex: "65%",
      width: "65%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
   },
   cardRow: {
      position: "relative",
      display: "flex",
      overflowX: "auto",
      overflowY: "hidden"
   },
   playingField: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      maxWidth: "100%"
   },
   cardColumn: {
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden",
      overflowY: "auto",
      height: "100%"
   },
   hand: {
      display: "flex",
      margin: "auto",
      position: "relative"
   }
};

export default battlefieldStyle;
