import {useEffect}  from "react"
import {useDispatch,useSelector} from "react-redux"
import {getUsers} from "../redux/actions"
import UserCard from "./UserCard"

const UserList=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    const users=useSelector((state)=>state.userReducer.users)
    console.log(users,"ssssssssss")
    return(
        <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
            {
                
                users && users.map((el)=>(
                    <UserCard el={el} />
                ))
            }
        </div>
    )
}

export default UserList 