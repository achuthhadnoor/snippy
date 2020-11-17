 const taskReducer = (state = [],action)=>{
    let {type,payload} = action;
    switch (type) {
        case 'ADD_TASK':  
        return{
                ...state,
                tasks : [...state.tasks,payload],
            }
        case 'TASK_ERROR' :  
            return{
                ...state,
                error:payload
            }
            case 'GET_TASKS': 
            return{
                ...state,
                tasks:[...payload]
            }
        default:
            return state;
    }
}
export default taskReducer;