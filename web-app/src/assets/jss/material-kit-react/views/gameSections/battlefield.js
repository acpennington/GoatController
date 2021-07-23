const battlefieldStyle = {
    cardsInPlay: {
       position: "relative",
       flex: "66%",
       width: "66%",
       height: "100%",
       marginLeft: "0.5%",
       marginRight: "0.5%"
    },
    cardRow: {
       position: "relative",
       display: "flex",
       overflowX: "auto",
       overflowY: "hidden"
    },
    playingField: {
       position: "relative",
       display: "flex",
       flexDirection: "row",
       width: "100%",
       flexFlow: "column wrap"
    },
    cardColumn: {
       position: "relative",
       display: "flex",
       flexDirection: "column",
       overflowX: "hidden",
       overflowY: "auto"
    },
    hand: {
       display: "flex",
       margin: "auto",
       position: "relative"
    }
 };
 
 export default battlefieldStyle;
 