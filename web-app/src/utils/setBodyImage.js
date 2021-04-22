export default function setBodyImage(imageName) {
    const body = document.body;
    body.style.backgroundImage = 'url("/backgrounds/'+imageName+'")';
}