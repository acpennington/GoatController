const initialState = [{ author: "Game", content: "New match started."}, { author: "Player1", content: "glhf"}];

export default function (state = initialState, action) {
    const { type, data } = action;
    switch (type) {
        case "ADD_MESSAGE":
            state.push(data);
            return state;
        case "RESET_CHAT":
            return initialState;
        default:
            return state;
    }
}