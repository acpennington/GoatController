function getQueryParams() {
   const params = {};
   const urlString = window.location.href;

   const paramsOnly = urlString.split("?")[1];
   if (!paramsOnly) return params;

   const paramsArray = paramsOnly.split("&");
   paramsArray.forEach((param) => {
      const [variable, value] = param.split("=");
      const newValue = variable === "ref" ? value.replace(/_/g, " ") : value;
      params[variable] = newValue;
   });

   return params;
}

export default getQueryParams;
