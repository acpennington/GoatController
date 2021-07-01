function getQueryParam(param) {
   const urlString = window.location.href;
   const trimmedString = urlString.split("?")[1];
   if (trimmedString) {
      const [queryName, queryParam] = trimmedString.split("=");
      if (queryName === param) return (queryName === "ref" ? queryParam.replace(/_/g, " ") : queryParam);
   }

   return "";
 }
 
 export default getQueryParam;
 