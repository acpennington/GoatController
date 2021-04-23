const marginTop = 5;

const message = {
   position: "relative",
   float: "left",
   backgroundColor: "rgb(62,64,66)",
   maxWidth: "80%",
   padding: "8px",
   margin: "0px 6px 5px 2px",
   borderRadius: "15px"
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
   messageHero: {
      ...message,
      float: "right",
      backgroundColor: "rgb(0,132,255)"
   },
   messageStartHero: {
      ...message,
      borderRadius: "15px 15px 4px 15px",
      float: "right",
      backgroundColor: "rgb(0,132,255)"
   },
   messageMidHero: {
      ...message,
      borderRadius: "15px 4px 4px 15px",
      float: "right",
      backgroundColor: "rgb(0,132,255)"
   },
   messageEndHero: {
      ...message,
      borderRadius: "15px 4px 15px 15px",
      float: "right",
      backgroundColor: "rgb(0,132,255)"
   }
};

export default chatStyle;
