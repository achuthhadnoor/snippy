
let initialState = {};
if ('authedUser' in localStorage) {
	try {
		initialState['authedUser'] = localStorage['authedUser'];
	} catch (e) {
		initialState['authedUser'] = null;
	}
}
 
const AuthReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                user: {...payload}
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                error: payload
            }

        case 'LOGOUT':
            return {
                ...state,
                user: {...payload}
            }
        case 'UPDATE_USER':
            debugger
            return { ...state, user: { ...payload } };
        default:
            return state;
    }
}

export default AuthReducer
