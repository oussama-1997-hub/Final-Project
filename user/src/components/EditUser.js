import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import {editUser} from "../redux/actions"



const EditUser = ({el, isAuth}) => {
  const [modal, setModal] = useState(false);
  const[username,setUsername]=useState(el.username)
  const[phoneNumber,setPhonenumber]=useState(el.phoneNumber)
  const[email,setEmail]=useState(el.email)


  const toggle = () => {
    setModal(!modal);

  };
  const dispatch = useDispatch();

  const editt=()=>{
    dispatch(editUser(el._id,{username,phoneNumber,email}))
    setModal(!modal)
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Edit User{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleTitle"> Username </Label>
              <Input
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
                type="title"
                name="title"
                id="exampleTitle"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Phone Number</Label>
              <Input
         value={phoneNumber}
         onChange={(e)=>setPhonenumber(e.target.value)}
                type="text"
                name="content"
                id="exampleConetnt"
                placeholder="Conetnt"
              />
            </FormGroup>
              <FormGroup>
              <Label for="examplePassword">Email</Label>
              <Input
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
                type="text"
                name="content"
                id="exampleConetnt"
                placeholder="Conetnt"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>
            save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditUser;