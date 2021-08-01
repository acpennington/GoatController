import { backgrounds } from "./constants.js";

export default function setBodyImage() {
   const body = document.body;
   const settings = JSON.parse(window.sessionStorage.getItem("settings"));

   let url;
   if (!settings) {
      url = "/backgrounds/" + backgrounds[Math.floor(Math.random() * backgrounds.length)];
   } else if (settings.gamebg.startsWith("http")) {
      url = settings.gamebg;
   } else {
      url = `/backgrounds/${settings.gamebg}`;
   }

   body.style.backgroundImage = `url("${url}")`;
}
