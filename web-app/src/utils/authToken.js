import { headers } from "utils/constants.js";

function getAuthHeaders() {
   headers["x-auth-token"] = window.sessionStorage.getItem("token");
   return { headers };
}

function checkToken() {
   const token = window.sessionStorage.getItem("token");
   if (!token) window.location.href = "/login-page";
}

export { getAuthHeaders, checkToken };
