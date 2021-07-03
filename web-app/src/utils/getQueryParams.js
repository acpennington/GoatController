function getQueryParams() {
   const urlString = window.location.href;
   const paramsOnly = urlString.split("?")[1];
   const paramsArray = paramsOnly.split("&");
   const params = {};

   paramsArray.forEach((param) => {
      const [variable, value] = param.split("=");
      const newValue = variable === "ref" ? value.replace(/_/g, " ") : value;
      params[variable] = newValue;
   });

   return params;
}

export default getQueryParams;
