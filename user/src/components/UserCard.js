import React from 'react';
import {deletUser, editUser, logout} from "../redux/actions"
import {useDispatch} from "react-redux"
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import "./UserCard.css";
import EditUser from './EditUser';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"


const UserCard=({el})=>{
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.authReducer.user)
    const navigate=useNavigate()
    const deletee=()=>{
dispatch(deletUser(el._id))
dispatch(logout())
navigate("/")
    }
    const edit=()=>{
      dispatch(editUser(el._id))
          }
    return(
        <div>
       <Card className="user-card">
      <div className="user-card-header">
        <div className="user-avatar">
        </div>
        <div className="user-info">
          <h4 className="username">{el.username}</h4>
          <p className="user-details">{el.email}</p>
          <p className="user-details">{el.phoneNumber}</p>
        </div>
      </div>
      <div className="user-card-footer">
      {user && el.username==user.username && (<>
        <Button className="delete-button" onClick={deletee}>
          Delete
        </Button>
        <EditUser el={el} /></>)}
        
        {/* You can add more buttons or actions here */}
      </div>
    </Card>
        </div>
    )
}

export default UserCard 