import * as ActionTypes from "../constants/ActionTypes";

const initialState = {
    loginToken: null,
    loginUser: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.LOGIN_TOKEN:
        return {
            ...state,
            loginToken: action.payload,
        };
    case ActionTypes.LOGIN_USER:
        return {
            ...state,
            loginUser: action.payload,
        };

    default:
        return state;
    }
};
export default loginReducer;
