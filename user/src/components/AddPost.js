import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {addPost} from "../redux/actions"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
const AddPost = () => {
const[title,setTitle]=useState("")
const[content,setContent]=useState("")
const[author,setAuthor]=useState("")
const[updatedAt,setUpdatedAt]=useState("")
const[createdAt,setCreatedAt]=useState("")
const[imageUrl,setImageUrl]=useState("")
const[likes,setLikes]=useState(0)
const[isPublished,setIspublished]=useState(false)
  const [cancel, setCancel] = useState(false);
 const dispatch=useDispatch()
 const navigate=useNavigate()
 const user=useSelector((state)=>state.authReducer.user)

const add=()=>{
    
    
    dispatch(addPost({title,content,author,createdAt, updatedAt,likes, imageUrl, isPublished}))
    
    setCancel(!cancel)
}
  return (
    <>
 {cancel?(
navigate("/post")
 ):(
   
        <div style={{ margin: "100px" }}>
<Form>
       
        
        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input onChange={(e)=>(setTitle(e.target.value),setAuthor(user.username))} type="text" name="text" id="exampleText" placeholder="Post's subject" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Post</Label>
          <Col sm={10}>
            <Input onChange={(e)=>(setContent(e.target.value),setCreatedAt(Date.now))} type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
            <Button onClick={add}>Add Post</Button>
            <Button onClick={() => setCancel(!cancel)}>cancel</Button>
          </Col>
        </FormGroup>
      </Form>
        </div>
 )
}
    </>

  );
};

export default AddPost;