import getCardDetails from "utils/getCardDetails.js";

// gets a card and a params object and reports which params the card passed/failed
export default function checkParams(card, params) {
   const pass = [];
   const fail = [];
   const cardName = card.name;
   const cardDetails = getCardDetails(cardName);

   for (const paramName in params) {
      const singleParam = params[paramName];
      const { operator, value } = singleParam;

      switch (operator) {
         case ">":
            if (cardDetails[paramName] && cardDetails[paramName] >= value) pass.push(paramName);
            else fail.push(paramName);
            break;
         case "<":
            if (cardDetails[paramName] && cardDetails[paramName] <= value) pass.push(paramName);
            else fail.push(paramName);
            break;
         case "OR":
            if (cardDetails[paramName] && value.includes(cardDetails[paramName])) pass.push(paramName);
            else fail.push(paramName);
            break;
         default:
            if (cardDetails[paramName] && cardDetails[paramName] === value) pass.push(paramName);
            else fail.push(paramName);
      }
   }

   return { pass, fail };
}
