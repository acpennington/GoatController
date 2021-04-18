import axios from "axios";

function setAuthToken(token) {
   if (token) axios.defaults.headers.common["x-auth-token"] = token;
   else delete axios.defaults.headers.common["x-auth-token"];
}

function checkToken() {
   const token = window.sessionStorage.getItem("token");
   if (!token) window.location.href = "/login-page";
}

export { setAuthToken, checkToken };
