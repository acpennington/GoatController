function isDiscordValid(discordName) {
   const splitName = discordName.split("#");
   return splitName.length === 2 && splitName[1].length === 4 && Number.isInteger(parseFloat(splitName[1]));
}

function formatFileName(fileName) {
   return fileName.split(".")[0].replace(/_/g, " ");
}

export { isDiscordValid, formatFileName };
