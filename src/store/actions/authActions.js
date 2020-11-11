export const LoginUser = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((rawUser) => {
            localStorage.setItem("authedUser",rawUser.user.uid)
            dispatch({
                type: 'LOGIN',
                payload: rawUser.user
            })
        })
        .catch(e => {
            dispatch({ type: 'LOGIN_ERROE', payload: e });
        })
}
export const SignOut = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
        .auth()
        .signOut()
        .then((rawUser) => {
            localStorage.clear();
            dispatch({
                type: 'LOGOUT',
                payload: {}
            })
        })
        .catch(e => {
            dispatch({ type: 'LOGIN_ERROE', payload: e });
        })
}