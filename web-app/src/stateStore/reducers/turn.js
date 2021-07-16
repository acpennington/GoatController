import { playSound } from "../actions/field";
import { DRAW, NEXT_TURN, SET_TURN } from "utils/constants.js";

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
      default:
         return state;
   }
}
