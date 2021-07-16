import { playSound } from "../actions/field";
import { DRAW, END, NEXT_TURN, phases, SET_TURN, NEXT_PHASE, PREV_PHASE, RESET_TURN } from "utils/constants.js";

const initialState = {
   player: "",
   phase: DRAW
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SET_TURN:
         const newPhase = data.phase;
         playSound("/sounds/" + (newPhase === NEXT_TURN ? "endturn" : "phasechange") + ".mp3");
         return data;
      case NEXT_PHASE:
         playSound("/sounds/" + (state.phase === END ? "endturn" : "phasechange") + ".mp3");
         return state.phase === NEXT_TURN ? state : { player: state.player, phase: phases[phases.indexOf(state.phase) + 1] };
      case PREV_PHASE:
         playSound("/sounds/phasechange.mp3");
         return state.phase === DRAW ? state : { player: state.player, phase: phases[phases.indexOf(state.phase) - 1] };
      case RESET_TURN:
         return initialState;
      default:
         return state;
   }
}
