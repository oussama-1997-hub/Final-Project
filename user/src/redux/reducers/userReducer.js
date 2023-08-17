import { GET_USERS } from "../actionType"

const initState={
    users:null,
}


export const userReducer=(state=initState, action)=>{
    switch(action.type){
        case GET_USERS :
            return{
                ...state,
                users:action.payload.users,
            }
            default:
                return state
    }
}