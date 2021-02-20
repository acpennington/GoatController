const smallWidth = 200;
const largeWidth = 500;

const cardStyle = {
   default: {
      fontVariant: "small-caps"
   },
   cardSmall: {
      fontVariant: "small-caps",
      width: smallWidth + "px",
      height: (86 / 59) * smallWidth + "px",
      padding: smallWidth * 0.05 + "px",
      fontSize: (27 / 473) * smallWidth + "px"
   },
   cardLarge: {
      width: largeWidth + "px",
      height: (86 / 59) * largeWidth + "px",
      padding: largeWidth * 0.05 + "px",
      fontSize: (27 / 473) * largeWidth + "px"
   },
   normalMonster: {
      backgroundColor: "#fbc676"
   },
   effectMonster: {
      backgroundColor: "#c9823f"
   },
   ritualMonster: {
      backgroundColor: "#156db4"
   },
   fusionMonster: {
      backgroundColor: "#7f598c"
   },
   spell: {
      backgroundColor: "#1f8f97",
      color: "white"
   },
   trap: {
      backgroundColor: "#9e427e",
      color: "white"
   }
};

export { cardStyle };
