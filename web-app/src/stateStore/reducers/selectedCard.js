const initialState = null;

export default function (state = initialState, action) {
   const { type, data } = action;
   switch (type) {
      case "NEW_SELECTION":
         return data;
      case "CLEAR_SELECTION":
         return initialState;
      default:
         return state;
   }
}
