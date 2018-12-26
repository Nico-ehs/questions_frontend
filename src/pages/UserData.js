import React, { Component } from 'react';



class UserData extends Component {

  state = {
    user: null
  }
  componentDidMount() {
    console.log("route test")
  }

  render() {
    return (
      <div>
        Test UserData
      </div>
    );
  }
}



export default UserData;
