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
import {editPost} from "../redux/actions"



const EditModal = ({el}) => {
  const [modal, setModal] = useState(false);
  const[title,setTitle]=useState(el.title)
  const[content,setContent]=useState(el.content)
  const[updatedAt,setupdatedAt]=useState(el.updatedAt)
  const toggle = () => {
    setModal(!modal);

  };
  const dispatch = useDispatch();

  const editt=()=>{
    dispatch(editPost(el._id,{title,content,updatedAt}))
    setModal(!modal)
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Edit Post{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleTitle">Title</Label>
              <Input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
                type="title"
                name="title"
                id="exampleTitle"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">content</Label>
              <Input
         value={content}
         onChange={(e)=>setContent(e.target.value)}
                type="text"
                name="content"
                id="exampleConetnt"
                placeholder="Conetnt"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleUpdatedAt">Update Date</Label>
              <Input
              value={updatedAt}
              onChange={(e)=>setupdatedAt(e.target.value)}
                type="text"
                name="update"
                id="exampleUpdate"
                placeholder="update"
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

export default EditModal;