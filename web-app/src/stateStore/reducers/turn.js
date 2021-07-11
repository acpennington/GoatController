import { DRAW, NEXT_TURN, phases, SET_TURN, NEXT_PHASE, PREV_PHASE, RESET_TURN } from "utils/constants.js";

const initialState = {
   player: "",
   phase: DRAW
};

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case SET_TURN:
         console.log(JSON.stringify(data));
         return data;
      case NEXT_PHASE:
         return state.phase === NEXT_TURN ? state : { player: state.player, phase: phases[phases.indexOf(state.phase) + 1] };
      case PREV_PHASE:
         return state.phase === DRAW ? state : { player: state.player, phase: phases[phases.indexOf(state.phase) - 1] };
      case RESET_TURN:
         return initialState;
      default:
         return state;
   }
}
