const initialState = {
    villain: {
        hand: [],
        "s/t": [
            null,
            null,
            null,
            null,
            null
        ],
        monster: [
            null,
            null,
            {name: "Shining Angel"},
            null,
            null
        ]
    },
    hero: {
        hand: [],
        "s/t": [
            null,
            null,
            null,
            null,
            null
        ],
        monster: [
            null,
            null,
            null,
            null,
            null
        ]
    }
};

export default function (state = initialState, action) {
    const { type, data } = action;
    switch (type) {
       case "MOVE_FROM":
          return data;
       case "UPDATE_VILLAIN":
          break;
       case "RESET_GAME":
          return initialState;
       default:
          return state;
    }
 }