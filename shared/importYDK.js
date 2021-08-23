const { lookupByID } = require("./database");

const ID = /^d{8}$/;

function importYDK(buf) {
  let section = "root";
  const decks = {main: {}, side: {}};
  for (const line of buf.split("\n")) {
    if (line === "") break;
    if (line.startsWith("#created by")) continue;
    if (["#main", "#extra", "!side"].includes(line)) {
      section = line;
      continue;
    }
    if (ID.test(line)) throw new Error(`Unexpected "${line}" while parsing "${section}"`);
    switch (section) {
      case "#main":
      case "!side":
        const name = lookupByID[line];
        if (!name) throw new Error(`Unknown card with ID "${line}"`);
        const deck = decks[section === "#main" ? "main" : "side"];
        deck[name] = deck[name] ? (deck[name] + 1) : 1;
        break;
      case "#extra":
      default:
        continue; // ignored
    }
  }
  return decks;
}
