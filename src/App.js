import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';



import NavContainer from './components/NavContainer';
import Home from './pages/Home';
import QuestionShow from './pages/QuestionShow';
import UserData from './pages/UserData';
import Login from './pages/Login';



// function postBackendData(route, data, confirmFn){
//     return fetch(BackendUrl+route,{
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//         },
//         body: data
//     }).then(res => res.json()).then(json => confirmFn(json));
// }



class App extends Component {

  state = {
    user: null
  }
  componentDidMount() {
    console.log("route test")
  }

  render() {
    return (
      <div className="App">
      <Router>
      <React.Fragment>
        <NavContainer />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userdata" component={UserData} />
        <Route path="/question/:id" component={Question}/>
      </React.Fragment>
      </Router>
      </div>
    );
  }
}

const Question = ({ match }) => (
  <div>
    <QuestionShow id={match.params.id} />
  </div>
)

export default App;
