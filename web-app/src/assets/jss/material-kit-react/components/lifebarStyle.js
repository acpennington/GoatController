const container = {
   position: "relative",
   borderStyle: "solid",
   borderWidth: "2px",
   borderColor: "black",
   borderRadius: "10px",
   padding: "5px",
   margin: "3px 10px",
   userSelect: "none",
   width: "25%"
};

const arrow = {
   position: "absolute",
   top: "0%",
   fontSize: 30
};

const lifebarStyle = {
   containerhero: {
      background: "linear-gradient(90deg, rgb(0, 255, 153), rgb(0, 0, 255))",
      ...container
   },
   containervillain: {
      background: "linear-gradient(90deg, rgb(255, 153, 0), rgb(255, 0, 0))",
      ...container
   },
   blackBar: {
      borderRadius: "6px 2px px 6px",
      backgroundColor: "black",
      height: "100%",
      width: "50%",
      position: "absolute",
      top: 0,
      left: 0
   },
   life: {
      fontSize: "1.5rem",
      fontWeight: 500,
      position: "relative",
      width: "100%",
      textAlign: "center"
   },
   heroArrow: {
      ...arrow
   },
   villainArrow: {
      ...arrow,
      right: 0
   }
};

export default lifebarStyle;
