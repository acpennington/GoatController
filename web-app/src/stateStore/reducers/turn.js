import { DRAW, NEXT_TURN, phases, SET_TURN, NEXT_PHASE, PREV_PHASE, RESET_TURN } from "utils/constants.js";

const initialState = {
   player: "",
   phase: DRAW
};

export default function (state = initialState, action) {
   const { type, data } = action;
   let phaseNum;
   switch (type) {
      case SET_TURN:
         return data;
      case NEXT_PHASE:
         if (state.player !== data) {
            if (state.phase === NEXT_TURN) return { player: data, phase: DRAW };
            else return state;
         } else {
            phaseNum = phases.indexOf(state.phase);
            if (phaseNum === phases.length - 1) return state;
            else return { player: state.player, phase: phases[phaseNum + 1] };
         }
      case PREV_PHASE:
         if (state.player !== data) return state;
         phaseNum = phases.indexOf(state.phase);
         return { player: state.player, phase: phases[phaseNum && phaseNum - 1] };
      case RESET_TURN:
         return initialState;
      default:
         return state;
   }
}
