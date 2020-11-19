import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; 
if (!firebase.apps.length) {
    // Add your Firebase credentials
    firebase.initializeApp({
        apiKey: 'AIzaSyCWvbVoWV_1garK_RwqxLIwonrzoTwgGuw',
        authDomain: "coder-2e6f6.firebaseapp.com",
        databaseURL: "https://coder-2e6f6.firebaseio.com",
        projectId: "coder-2e6f6",
        storageBucket: "coder-2e6f6.appspot.com",
        messagingSenderId: "854069867003",
        appId: "1:854069867003:web:c8b24f446b01622c889b5e"
    });
}

export const firestore = firebase.firestore();


export const GetUserData = dispatch =>{ 
    debugger;
    var user = firebase.auth().currentUser;
    if(!user){
        user = {}
    } 
    return   dispatch({
        type: 'UPDATE_USER',
        payload: user
    })
} 

export default firebase;