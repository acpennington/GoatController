import { headers } from "shared/constants.js";

function getAuthHeaders(addHeaders = true) {
   const token = window.sessionStorage.getItem("token");

   if (addHeaders) {
      headers["x-auth-token"] = token;
      return { headers };
   } else return token;
}

function checkToken(isGame = false) {
   const token = window.sessionStorage.getItem("token");
   if (!token) window.location.href = "/login-page";
   else if (!isGame) {
      const activeMatch = window.sessionStorage.getItem("activeMatch");
      if (activeMatch) window.location.href = "/game?id=" + activeMatch;
   }
}

export { getAuthHeaders, checkToken };
