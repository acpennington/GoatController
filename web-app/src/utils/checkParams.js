import getCardDetails from "utils/getCardDetails.js";

// gets a card and a params object and reports which params the card passed/failed
export default function checkParams(card, params) {
   const pass = [];
   const fail = [];
   const cardName = card.name;
   const cardDetails = getCardDetails(cardName);

   for (let paramName in params) {
      const singleParam = params[paramName];

      // this is a hacky way to allow multiple searches of the same param type
      if (paramName.endsWith("2")) paramName = paramName.slice(0, -1);

      const { operator, value } = singleParam;
      const cardParam = paramName === "name" ? cardName : cardDetails[paramName];

      let paramPassed;
      switch (operator) {
         case ">":
            paramPassed = cardParam && cardParam >= value;
            break;
         case "<":
            paramPassed = cardParam && cardParam <= value;
            break;
         case "OR":
            paramPassed = cardParam && value.includes(cardParam);
            break;
         case "TYPEMATCH":
            paramPassed = cardParam && (cardParam.startsWith(value + "/") || cardParam.startsWith(value + " –"));
            break;
         case "CONTAINS":
            paramPassed = cardParam && cardParam.toLowerCase().includes(value.toLowerCase());
            break;
         default:
            paramPassed = cardParam && cardParam === value;
      }

      if (paramPassed) pass.push(paramName);
      else fail.push(paramName);
   }

   return { pass, fail };
}
