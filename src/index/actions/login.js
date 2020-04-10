import * as ActionTypes from "../constants/ActionTypes";

const loginAction = (login_user, login_token) => {
    return async dispatch => {
        try {
            dispatch({
                type: ActionTypes.LOGIN_TOKEN,
                payload: login_token
            })
            dispatch({
                type: ActionTypes.LOGIN_USER,
                payload: login_user
            });
        } catch (e) {
            console.log(e)
        }
    }
}

export {
    loginAction
}
