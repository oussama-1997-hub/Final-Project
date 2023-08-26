import { GET_POSTS, LIKE_POST, ADD_COMMENT } from "../actionType"

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
            case LIKE_POST:
                // Handle updating the state when a post is liked
                return {
                  ...state,
                  posts: state.posts.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                  ),
                };
              case ADD_COMMENT:
                // Handle updating the state when a comment is added
                return {
                  ...state,
                  posts: state.posts.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                  ),
                };
            default:
                return state

    }
}