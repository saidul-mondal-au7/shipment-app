import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";


export const EditShipment = (props) => {
  const { editUser, data } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentUserId = props.match.params.Id;
//   console.log(currentUserId)

  useEffect(() => {
    const userId = currentUserId;
    console.log(userId)
    const selectedUser = data.find(user => user.id == userId);
    // localStorage.setItem('localData', JSON.stringify(selectedUser));
    setSelectedUser(selectedUser) 
    
  }, [currentUserId, data])

  const onChange = (event) => {
    setSelectedUser({ ...selectedUser, [event.target.name]: event.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/shipmentdetails")
  }

  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
    <Form onSubmit={onSubmit}>
      <FormGroup>
      <Label>Edit Shipment Name</Label>
      <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter name" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/shipmentdetails" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    </div>
  )
}