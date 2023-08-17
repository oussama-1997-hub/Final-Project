import React from 'react';
import {deletUser} from "../redux/actions"
import {useDispatch} from "react-redux"
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import "./UserCard.css";

const UserCard=({el})=>{
    const dispatch=useDispatch()

    const deletee=()=>{
dispatch(deletUser(el._id))
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
        <Button className="delete-button" onClick={deletee}>
          Delete
        </Button>
        {/* You can add more buttons or actions here */}
      </div>
    </Card>
        </div>
    )
}

export default UserCard 