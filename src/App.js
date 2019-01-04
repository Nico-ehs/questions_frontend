import React, { Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import NavContainer from './components/NavContainer';
import Home from './pages/Home';
import QuestionShow from './pages/QuestionShow';
import UserData from './pages/UserData';
import Login from './pages/Login';

import './App.css';

import './globalUse.js'

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


class App extends Component {

  state = {
    user: null
  }

  reloadUser = () => {
    postBackendData("users", JSON.stringify({"user": {"name":this.state.user.name}}), this.setUser)
  }

  setUser = (user) => {
    this.setState({user: user})
  }


  render() {

    const Question = ({ match }) => (
      <div>
        <QuestionShow id={match.params.id}  user={this.state.user} reload={this.reloadUser} />
      </div>
    )
    console.log(this.state)

    return (
      <div className="App">
      <Router>
      <React.Fragment>
        <NavContainer user={this.state.user} setUser={this.setUser}/>
        <Route exact path="/" render={() => <Home user={this.state.user} />}/>
        <Route exact path="/home" render={() => <Home user={this.state.user} />} />
        <Route exact path="/login" render={() => this.state.user ?
            <Redirect to="/home" /> :
            <Login setUser={this.setUser} /> }
          />
        <Route exact path="/userdata" render={() => <UserData user={this.state.user} reload={this.reloadUser} />} />
        <Route path="/questions/:id" component={Question} />
      </React.Fragment>
      </Router>
      </div>
    );
  }
}





export default App;
