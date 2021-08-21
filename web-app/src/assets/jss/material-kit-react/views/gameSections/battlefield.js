import { DIVIDER_HEIGHT, RIGHT_PANEL_SIZE, LEFT_PANEL_SIZE } from "shared/constants";

const battlefieldWidth = 100 - RIGHT_PANEL_SIZE - LEFT_PANEL_SIZE + "%";

const battlefieldStyle = {
   cardsInPlay: {
      flex: battlefieldWidth,
      width: battlefieldWidth,
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
   },
   fieldDivider: {
      height: DIVIDER_HEIGHT + "px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
   }
};

export default battlefieldStyle;
