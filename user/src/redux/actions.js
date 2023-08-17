import { GET_USERS, GET_POSTS, GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "./actionType"

import axios from "axios"

export const registerUser=(newUser)=>async(dispatch)=>{
    try{
        const res=await axios.post("/api/user/register",newUser)
        dispatch({
            type:REGISTER_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}
export const loginUser=(formData)=>async(dispatch)=>{
    try{
        const res=await axios.post("/api/user/login",formData)
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}


export const getAuthUser=()=>async(dispatch)=>{
const  config={
    headers:{
        'authorization':localStorage.getItem("token")
    }
}
    try{
        const res=await axios.get("/api/user/user",config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}

export const logout=()=>(dispatch)=>{
dispatch({
    type:LOGOUT_USER
})
}
export const getUsers=()=>(dispatch)=>{
    axios.get("/api/user/")
    .then((res)=>dispatch({type:GET_USERS, payload:res.data}))
    .catch((err)=>{console.log(err)})
}

export const addUser=(newUser)=>(dispatch)=>{
    axios.post("/api/user/add",newUser)
    .then((res)=>dispatch(getUsers()))
    .catch((err)=>console.log(err))
}

export const deletUser=(idUser)=>(dispatch)=>{
    axios.delete(`/api/user/${idUser}`)
    .then((res)=>dispatch(getUsers()))
    .catch((err)=>console.log(err))
}

export const editUser=(idUser,editedUser)=>(dispatch)=>{
    axios.put(`/api/user/edit/${idUser}`,editedUser)
    .then((res)=>dispatch(getUsers()))
    .catch((err)=>console.log(err))
}
export const getPosts=()=>(dispatch)=>{
    axios.get("/api/post/")
    .then((res)=>dispatch({type:GET_POSTS, payload:res.data}))
    .catch((err)=>{console.log(err)})
}

export const addPost=(newPost)=>(dispatch)=>{
    axios.post("/api/post/add",newPost)
    .then((res)=>dispatch(getPosts()))
    .catch((err)=>console.log(err))
}

export const deletePost=(idPost)=>(dispatch)=>{
    axios.delete(`/api/post/${idPost}`)
    .then((res)=>dispatch(getPosts()))
    .catch((err)=>console.log(err))
}

export const editPost=(idPost,editPost)=>(dispatch)=>{
    axios.put(`/api/post/edit/${idPost}`,editPost)
    .then((res)=>dispatch(getPosts()))
    .catch((err)=>console.log(err))
}