import { headers } from "utils/constants.js";

function getAuthHeaders() {
   headers["x-auth-token"] = window.sessionStorage.getItem("token");
   return { headers };
}

function checkToken() {
   const token = window.sessionStorage.getItem("token");
   if (!token) window.location.href = "/login-page";
   else {
      const activeGame = window.sessionStorage.getItem("activeGame");
      if (activeGame) window.location.href = "/game?id="+activeGame;
   }
}

export { getAuthHeaders, checkToken};
