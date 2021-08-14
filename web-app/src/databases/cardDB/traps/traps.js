import normalTraps from "./normalTraps.js";
import continuousTraps from "./continuousTraps.js";
import counterTraps from "./counterTraps.js";

const traps = { ...normalTraps, ...continuousTraps, ...counterTraps };

export default traps;
