
export const taskAdd = task => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        // const authId = getState().firebase.auth.uid;
        firestore
            .collection('tasks')
            .add({
                ...task,
                createdAt: new Date(),
                // createdBy: authId
            })
            .then(() => {
                dispatch({
                    type: 'ADD_TODO',
                    payload: task
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