import React from "react";
import { Form, Button } from "react-bootstrap/lib";
import {Form} from '../globalUse.js'

const BackendUrl = "http://localhost:3000/"

function postBackendData(route, data, confirmFn){
    return fetch(BackendUrl+route,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: data
    }).then(res => res.json()).then(json => confirmFn(json));
}

class Login extends React.Component {

  state = {
    username: ""
  };

  loginSubmit = (event) => {
    event.preventDefault()
    postBackendData("users", JSON.stringify({"user": {"name":this.state.username}}), this.props.setUser)
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  render(){
  	return (
      <div className="Login">
        <Form onSubmit={this.loginSubmit} >
          <Form.Group controlId="name">
            <Form.Label>Name</globalV.Form.Label>
            <Form.Control placeholder="Enter name" name="name" onChange={this.handleChange}/>

          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
  	)
  }
};

export default Login;
