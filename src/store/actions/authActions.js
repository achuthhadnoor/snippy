import firebase from '../../utils/firebase'

export const LoginUser = () => (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((rawUser) => {
            localStorage.setItem("authedUser", rawUser.user.uid);
            // var user = formatUser(rawUser);
            dispatch({
                type: 'LOGIN',
                payload: rawUser
            })
        })
        .catch(e => {
            dispatch({ type: 'LOGIN_ERROR', payload: e });
        })
};
export const SignOut = () => dispatch => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            localStorage.clear();
            dispatch({
                type: 'LOGOUT',
                payload: {}
            })
        })
        .catch(e => {
            dispatch({ type: 'LOGIN_ERROR', payload: e });
        })
};


const formatUser = (rawuser) => {
    const { uid, ...userWithoutToken } = rawuser;
    return {
        uid: uid,
        photoUrl: userWithoutToken.photoURL,
        displayName: userWithoutToken.displayName,
    }
}