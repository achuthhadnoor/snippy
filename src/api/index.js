// import { firestore } from '../utils/firebase'
import * as actions from '../store/constants'
 
const getUser = (dispatch, userId) => {
    // firestore.collection('users').doc(userId).get().then((snap)=>{
    //     let user = snap.data();
    //     dispatch({
    //         type:'UPDATE_USER',
    //         user
    //     })
    // })
    // .catch(e=>{
    //     console.log(e);        
    //     return dispatch({
    //         type:'LOGOUT',
    //         error:e
    //     })
    // })
    var user = localStorage.getItem('user');
    user = JSON.parse(user);
   dispatch({
       type : actions.UPDATE_USER,
       payload: user
   });  
}

const getTasks = (dispatch) => {

}

const getCollections = (dispatch) => {

}

const getNotifications = (dispatch) => {

}

export const getAllData = (dispatch) => {
    const userId = localStorage['authedUser'];
    if (userId) {
        getUser(dispatch, userId);
        getTasks(dispatch);
        getCollections(dispatch);
        getNotifications(dispatch);

    }
}