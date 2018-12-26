import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'

import {Link} from 'react-router-dom'




class NavContainer extends Component {


  genUserbets = () => {

  }

  render() {
    const BetsPage = {
      pathname: '/user_predictions',
      state: { log: "test1", user: this.props.user}
    }

    return (
      <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Questions</Navbar.Brand>
      <Nav className="mr-auto">
      {this.props.user ? <Link to="/userdata">userdata</Link> : null }
      {this.props.user ? `Money: ${this.props.user.money}` : null}
      </Nav>


      <Link to="/userdata">Login</Link>
      </Navbar>
      </div>
    );
  }
}

export default NavContainer;
