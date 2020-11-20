
const UserReducer = (state = {}, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'UPDATE_USER':
            return { ...state, user: { ...payload } };
        default:
            return state;
    }
}

export default UserReducer;