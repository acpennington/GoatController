function validUrl(url) {
   try {
      new URL(url);
   } catch {
      return false;
   }
   return true;
}

function getError(fieldName) {
   switch (fieldName) {
      case "name":
         return "Your league name contains too many characters.";
      case "description":
         return "Your league description contains too many characters.";
      case "website":
         return "Invalid website URL. It should look similar to https://domain.com.";
      case "discord":
         return 'Discord URL should start with "https" and contain "discord" in it.';
      case "youtube":
         return 'YouTube URL should start with "https" and contain "youtube.com" in it.';
      case "twitch":
         return 'Twitch URL should start with "https" and contain "twitch.tv" in it.';
      case "center":
         return "Center must be a number";
      case "kvalue":
         return "K-value must be a non-negative number.";
      case "decay":
         return "Daily ratings decay % must between 0 and 100.";
      default:
         return "Unknown";
   }
}

function nameToId(leagueName) {
   return leagueName.replace(/[^a-zA-Z ]/g, "").replace(/ /g, "_");
}

export { validUrl, getError, nameToId };
