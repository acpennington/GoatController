import { headers } from "utils/constants.js";

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
      const activeGame = window.sessionStorage.getItem("activeGame");
      if (activeGame) window.location.href = "/game?id="+activeGame;
   }
}

export { getAuthHeaders, checkToken};
