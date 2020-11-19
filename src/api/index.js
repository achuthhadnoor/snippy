import { firestore } from '../utils/firebase'

const getUser = (dispatch,userId)=>{
    firestore.collection('users').doc(userId).get().then((snap)=>{
        let user = snap.data();
        dispatch({
            type:'UPDATE_USER',
            user
        })
    })
    .catch(e=>{
        console.log(e);        
        return dispatch({
            type:'LOGOUT',
            error:e
        })
    })
}

const getTasks = (dispatch)=>{

}

const getCollections = (dispatch)=>{

}

const getNotifications = (dispatch)=>{

}

export const getAllData = (dispatch)=>{
    const userId = localStorage['authedUser'];
    debugger;
	if (userId) {
        getUser(dispatch, userId);
        getTasks(dispatch);
        getCollections(dispatch);
        getNotifications(dispatch);

	}
}