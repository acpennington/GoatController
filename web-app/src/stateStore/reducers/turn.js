import { HERO, VILLAIN, DRAW, phases, SET_TURN, NEXT_PHASE, PREV_PHASE, RESET_TURN } from "utils/constants.js";

const initialState = {
   player: HERO,
   phase: DRAW
};

export default function (state = initialState, action) {
   const { type, data } = action;
   let phaseNum;
   switch (type) {
      case SET_TURN:
         return data;
      case NEXT_PHASE:
         if (state.player === VILLAIN) {
            if (phases.indexOf(state.phase) === phases.length - 1) return { player: HERO, phase: phases[0] };
            else return state;
         } else {
            phaseNum = phases.indexOf(state.phase);
            if (phaseNum === phases.length - 1) return state;
            else return { player: HERO, phase: phases[phaseNum + 1] };
         }
      case PREV_PHASE:
         if (state.player === VILLAIN) return state;
         phaseNum = phases.indexOf(state.phase);
         return { player: HERO, phase: phases[phaseNum && phaseNum - 1] };
      case RESET_TURN:
         return initialState;
      default:
         return state;
   }
}
