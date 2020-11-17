import firebase from '../../utils/firebase'
import {tasks} from '../../utils/data'
const firestore = firebase.firestore();
let userId = localStorage.getItem('authedUser')

export const getTasks = () => {
    // .where("createdAt" , ">=", Date.now())
    return dispatch => {
        // firestore.collection('tasks')
        //     .where("createdBy","==",userId)
        //     .onSnapshot(async snap => {
        //         let tasks = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        //         dispatch({ type: 'GET_TASKS', payload: tasks })
        //     })
        dispatch({type:'GET_TASKS',payload:tasks})
    }
}

export const taskAdd = task => {
    return (dispatch) => { 
        let createdAt = new Date();
        firestore
            .collection('tasks')
            .add({
                ...task,
                createdAt,
                createdBy: userId
            })
            .then((snap) => {
                dispatch({
                    type: 'ADD_TASK',
                    payload: {
                        id: snap.id,
                        task:task.task,
                        createdAt:createdAt
                    }
                });
            })
            .catch((e) => {
                dispatch({
                    type: 'TASK_ADD_ERROR',
                    payload: e
                })
            })

    }
}

