import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {deletePost} from "../redux/actions"
import {useDispatch} from "react-redux"
import EditModal from "./EditModal"
import "./PostCard.css";

const PostCard=({el})=>{
  const dispatch=useDispatch()

    const deletep=()=>{
dispatch(deletePost(el._id))
    }
    return(
      <div className="post-card">
      <Card className="post-content">
        <div className="author-info">
          <div className="author-name">{el.author}</div>
          <div className="post-date">{el.createdAt}</div>
        </div>
        <CardTitle className="post-title">{el.title}</CardTitle>
        <CardText className="post-content">{el.content}</CardText>
        <div className="post-actions">
          <Button onClick={deletep}>Delete</Button>
          <EditModal el={el} />
        </div>
      </Card>
    </div>
    )
}

export default PostCard 