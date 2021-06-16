function decodeQuery() {
   const urlString = window.location.href;
   const swappedString = urlString.replace(/_/g, " ");
   const trimmedString = swappedString.split("?")[1];
   if (trimmedString) {
      const [queryName, queryParam] = trimmedString.split("=");
      if (queryName === "ref") return queryParam.replace(/_/g, " ");
   }

   return "";
}

export { decodeQuery };
