function todaysDate() {
   const today = new Date();
   return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
}

function plusThirty() {
   const today = new Date();
   const newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
   return newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
}

module.exports = { todaysDate, plusThirty };
