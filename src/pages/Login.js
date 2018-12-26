import React from "react";
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'


class Login extends React.Component {



  render(){
    const cardData = this.props.cardData

  	return (
  	  <div>
      <Form inline>
        <FormControl type="text" placeholder="Username" className="mr-sm-2" />
        <Button onClick={this.props.loginFn} variant="outline-success">Login</Button>
      </Form>
  	  </div>
  	);
  }

};

export default Login;
