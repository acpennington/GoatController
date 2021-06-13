const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

// @route GET api/leagues
// @desc Returns name, description, id given a list of league IDs
// @access Public
// @db 1 read, 0 writes
async function get(body) {
   const leagues = [];
}

module.exports = get;
