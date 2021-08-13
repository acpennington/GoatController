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

      if (paramPassed(cardParam, value, operator)) pass.push(paramName);
      else fail.push(paramName);
   }

   return { pass, fail };
}

function paramPassed(cardParam, value, operator) {
   switch (operator) {
      case ">":
         return cardParam && cardParam >= value;
      case "<":
         return cardParam && cardParam <= value;
      case "OR":
         return cardParam && value.includes(cardParam);
      case "TYPEMATCH":
         return cardParam && (cardParam.startsWith(value + "/") || cardParam.startsWith(value + " –"));
      case "CONTAINS":
         if (cardParam && cardParam.includes("–")) {
            const [labelPart, effectPart] = cardParam.split("–");
            return labelPart.includes("Effect") && effectPart.toLowerCase().includes(value.toLowerCase());
         } else return cardParam && cardParam.toLowerCase().includes(value.toLowerCase());
      default:
         return cardParam && cardParam === value;
   }
}
