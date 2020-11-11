
const AuthReducer = (state = {}, action) => {
    let { type, payload } = action
    switch (type) {
        case 'LOGIN':
            return {
                user: payload
            }
        case 'LOGIN_ERROR':
            return {
                error: payload
            }

        case 'LOGOUT':
            return {
                user: payload
            }
        default:
           return state;
    }
}

export default AuthReducer
