const initialState = 0;

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payLoad;
        case "withdraw":
            return state - action.payLoad
        default:
            return state
    }
};

export default accountReducer;