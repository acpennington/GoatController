const phaseStep = require("./utils/phaseStep.js");

// @action NewPhase
// @desc Advances the phase
// @access Private
// @db 1 read, 0 writes
async function nextPhase(id, username, connectionId, api) {
   return await phaseStep(id, username, connectionId, api, false);
}

module.exports = nextPhase;
