import { GET_POSTS } from "../actionType"

const initState={
    posts:null,
}


export const postReducer=(state=initState, action)=>{
    switch(action.type){
        case GET_POSTS :
            return{
                ...state,
                posts:action.payload.posts,
            }
            default:
                return state
    }
}