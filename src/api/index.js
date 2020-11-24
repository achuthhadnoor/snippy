export const getUser = ()=>{
    let uid = localStorage.getItem('authedUser');
    if(uid){
        // get firebase user data and return the user data
        let user = {};
        return user
    }
    return null;
}