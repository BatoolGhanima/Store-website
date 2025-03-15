const authReducer=(state,action)=>{
switch(action.type){
    case 'Login':localStorage.setItem('token',action.payload.accessToken)
    return {
        token:action.payload.accessToken
    }
    case 'Logout': localStorage.removeItem('token')
   
    return {
        token: localStorage.getItem('item') || ''
    }
}
}
export default authReducer;