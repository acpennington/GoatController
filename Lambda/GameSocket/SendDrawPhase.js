const actionAndMessage = require("./utils/actionAndMessage.js");

async function sendDrawPhase(id, username, shouldSkipDraw, connectionId, api) {
    const drawMessage = username + (shouldSkipDraw ? " skipped their draw phase." : "drew a card for their draw phase.");
    const message = { author: "Server", content: drawMessage };
    const action = { action: "DRAW_PHASE_DRAW", data: "" };

    await actionAndMessage(id, action, message, connectionId, api);
    return { statusCode: 200, body: "LP adjusted" };
}

module.exports = sendDrawPhase;