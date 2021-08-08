const findUser = require("../utils/findUser.js");

// @route GET api/users/deck
// @desc Gets a deck it is is public
// @access Public
// @db 1 reads, 0 write
async function save(body) {
   const { username, deckName } = body;

   const user = await findUser(username, "decks");
   const deck = user.decks[deckName];

   if (!deck || !deck.public) return { statusCode: 400, body: { errors: [{ msg: "Deck not found (or not public)" }] } };
   else return { statusCode: 200, body: { deck } };
}

module.exports = save;
