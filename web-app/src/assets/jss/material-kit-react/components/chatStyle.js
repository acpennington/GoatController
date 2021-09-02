const marginTop = 5;

const message = {
   position: "relative",
   float: "left",
   color: "black",
   backgroundColor: "rgb(228,230,235)",
   maxWidth: "80%",
   padding: "8px",
   margin: "0px 6px 5px 2px",
   borderRadius: "15px"
};

const messageHero = {
   ...message,
   float: "right",
   backgroundColor: "rgb(0,132,255)",
   color: "white"
};

const messageSystem = {
   maxWidth: "100%",
   background: "none",
   color: "white",
   padding: "4px",
   margin: "0px",
   width: "100%"
};

const chatStyle = {
   container: {
      borderRadius: "3px",
      marginTop,
      padding: "4px 4px 0px 4px",
      backgroundColor: "rgba(0,0,0,0.9)",
      width: "100%",
      height: "calc(60% - " + marginTop + "px)"
   },
   messageContainer: {
      display: "inline-block"
   },
   message,
   messageStart: {
      ...message,
      borderRadius: "15px 15px 15px 4px"
   },
   messageMid: {
      ...message,
      borderRadius: "4px 15px 15px 4px"
   },
   messageEnd: {
      ...message,
      borderRadius: "4px 15px 15px 15px"
   },
   messageHero,
   messageStartHero: {
      ...messageHero,
      borderRadius: "15px 15px 4px 15px"
   },
   messageMidHero: {
      ...messageHero,
      borderRadius: "15px 4px 4px 15px"
   },
   messageEndHero: {
      ...messageHero,
      borderRadius: "15px 4px 15px 15px"
   },
   Server: messageSystem,
   Game: messageSystem
};

export default chatStyle;
