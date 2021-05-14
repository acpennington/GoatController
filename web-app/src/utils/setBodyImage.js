export default function setBodyImage() {
    const body = document.body;
    const settings = JSON.parse(window.sessionStorage.getItem("settings"));

    body.style.backgroundImage = 'url("/backgrounds/'+ (settings ? settings.gamebg : "Thousand_Eyes_Goats.png") +'")';
}