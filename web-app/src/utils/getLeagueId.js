function getLeagueId() {
    const urlString = window.location.href;
    const trimmedString = urlString.split("?")[1];
    if (trimmedString) {
       const [queryName, queryParam] = trimmedString.split("=");
       if (queryName === "id") return queryParam;
    }
 
    return "";
 }
 
 export default getLeagueId;
 