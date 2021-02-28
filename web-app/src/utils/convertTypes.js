function typesToList(typeString) {
   return typeString.split("_");
}

function typesToString(typeList) {
   const listLength = typeList.length;
   let typeString = "";

   for (let i = 0; i < listLength; i++) {
      if (i !== 0) typeString += "_";
      typeString += typeList[i];
   }

   return typeString;
}

export { typesToList, typesToString };
