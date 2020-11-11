 const taskReducer = (state = [],action)=>{
    let {type,payload} = action;
    switch (type) {
        case 'ADD_TASK':
            console.log(state);            
            return{
                ...state,
                tasks : [...state,payload],
            }
        case 'TASK_ADD_ERROR' : 
            console.log(state);
            return{
                ...state,
                error:payload
            }
        default:
            return state;
    }
}
export default taskReducer;