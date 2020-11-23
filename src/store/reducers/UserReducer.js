import { LIGHT } from "../../utils/constants";

let initialState = {
    user: { theme: LIGHT }
}

const UserReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'UPDATE_USER':
            return { ...state, user: { ...payload } };
        default:
            return state;
    }
}

export default UserReducer;