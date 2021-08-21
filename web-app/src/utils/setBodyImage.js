import { backgrounds } from "shared/constants.js";

export default function setBodyImage() {
   const body = document.body;
   const settings = JSON.parse(window.sessionStorage.getItem("settings"));

   let url;
   if (!settings || !settings.gamebg) {
      const storedBg = window.localStorage.getItem("gamebg");
      url = storedBg ? evalGamebg(storedBg) : "/backgrounds/" + backgrounds[Math.floor(Math.random() * backgrounds.length)];
   } else url = evalGamebg(settings.gamebg);

   body.style.backgroundImage = `url("${url}")`;
}

function evalGamebg(gamebg) {
   return gamebg.startsWith("http") ? gamebg : `/backgrounds/${gamebg}`;
}
