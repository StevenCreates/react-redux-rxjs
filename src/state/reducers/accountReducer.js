const accountReducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payLoad;
        case "withdraw":
            return state - action.payLoad;
        defalut:
            return state
    }
};

export default accountReducer;