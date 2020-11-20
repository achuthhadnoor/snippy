import firebase from '../../utils/firebase'
import * as actions from '../constants'

export const loginUser = () => dispatch => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((rawUser) => {
            localStorage.setItem("authedUser", rawUser.user.uid);
            var user = formatUser(rawUser);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({
                type: actions.UPDATE_USER,
                payload: user
            })
        })
        .catch(e => {
            dispatch({ type: 'LOGIN_ERROR', payload: e });
        })
}

export const logOut = ()=> dispatch=>{
    firebase.auth().signOut()
    .then(()=>{
        localStorage.clear();
        dispatch({
            type: actions.UPDATE_USER,
            payload:{}
        })
    })
}

const formatUser = ({ user }) => {
    return {
        uid: user.uid,
        photo: user.photoURL,
        name: user.displayName,
        email: user.email,
        verified: user.emailVerified,
    }
}