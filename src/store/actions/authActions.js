import firebase from '../../utils/firebase'

export const LoginUser = () => (dispatch) => {
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
export const SignOut = () => (dispatch) => {
    const firebase = getFirebase();
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
            dispatch({ type: 'LOGIN_ERROE', payload: e });
        })
}