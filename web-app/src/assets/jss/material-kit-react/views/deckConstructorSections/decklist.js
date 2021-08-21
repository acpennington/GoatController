import { RIGHT_PANEL_SIZE, LEFT_PANEL_SIZE } from "shared/constants";

const decklistWidth = 100 - RIGHT_PANEL_SIZE - LEFT_PANEL_SIZE + "%";

const decklistStyles = {
   container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      width: decklistWidth,
      flex: decklistWidth
   },
   allCards: {
      flex: "100%",
      height: "100%",
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
