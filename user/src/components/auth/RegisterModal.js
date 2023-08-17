import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {registerUser} from "../../redux/actions"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from 'reactstrap';
import {useNavigate} from "react-router-dom"


const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [username,setUsername]=useState("")
  const [phoneNumber,setPhonenumber]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")





  const toggle = () => {
    setModal(!modal);
  }; 
  const navigate=useNavigate()

  const dispatch = useDispatch();
 
const registerr=()=>{
  const newUser={username,phoneNumber,email,password}
  dispatch(registerUser(newUser))
  toggle()
  navigate("/dashboard")
}

  return (
    <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>   
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Username</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                className="mb-3"
              onChange={(e)=>(setUsername(e.target.value))}
              />
              <Label for="name">Phone Number</Label>
              <Input
onChange={(e)=>(setPhonenumber(e.target.value))}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Phone Number"
                className="mb-3"
              />
              <Label for="email">Email</Label>
              <Input
onChange={(e)=>(setEmail(e.target.value))}
                type="email"
                name="email"
                id="email"
                placeholder="email"
              />
              <Label for="password">Password</Label>
              <Input
              onChange={(e)=>(setPassword(e.target.value))}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={registerr}
              >
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;