import {useEffect}  from "react"
import {useDispatch,useSelector} from "react-redux"
import {getPosts} from "../redux/actions"
import PostCard from "./PostCard"

const PostList=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    },[])
    const posts=useSelector((state)=>state.postReducer.posts)
    console.log(posts,"ssssssssss")
    return(
        <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
            {
                
                posts && posts.map((el)=>(
                    <PostCard el={el} />
                ))
            }
        </div>
    )
}

export default PostList 