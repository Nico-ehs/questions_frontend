import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'

import '../globalUse.js'

const BackendUrl = "http://localhost:3000/"

function patchBackendData(route, data, confirmFn){
    return fetch(BackendUrl+route,{
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: data
    }).then(res => res.json()).then(json => confirmFn(json));
}


function deleteBackendData(route, confirmFn){
    return fetch(BackendUrl+route,{
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        }
    }).then(res => res.json()).then(json => confirmFn(json));
}

class UserData extends Component {

  state = {
    toEditQ:null,
    toEditA:null
  }


  openEditQ = (event) => {
    console.log(this.state)
    this.setState({toEditQ: event.target.parentElement.id*1})
  }
  closeEditQ = () => {
    console.log(this.state)
    this.setState({toEditQ: null})
  }


  openEditA = (event) => {
    this.setState({toEditA: event.target.parentElement.id*1})
  }
  closeEditA = () => {
    this.setState({toEditA: null})
  }


  updateQ = (event) => {
    console.log("update")
     patchBackendData(`/questions/${event.target.parentElement.id}`,
       JSON.stringify({"question": {text: (event.target.parentElement.children[0].value)}}),
      this.props.reload)
  }

  deleteQ = (event) => {
    console.log("delete")
    deleteBackendData(`/questions/${event.target.parentElement.id}`,this.props.reload)
  }

  updateA = (event) => {
    console.log("update")
     patchBackendData(`/answers/${event.target.parentElement.id}`,
       JSON.stringify({"answer": {text: (event.target.parentElement.children[0].value)}}),
      this.props.reload)
  }

  deleteA = (event) => {
    console.log("delete")
    deleteBackendData(`/answers/${event.target.parentElement.id}`,this.props.reload)
  }




  genUserQuestions  = () => {
    return this.props.user.questions.map(question =>
      <div>
      <h4>{question.text}</h4>
      {(this.state.toEditQ === question.id)?
        <Form inline id={question.id} >
        <FormControl type="text" defaultValue={question.text} />
        <Button onClick={this.updateQ} >Update</Button>
        <Button onClick={this.closeEditQ} >Close</Button>
      </Form> :
      <div id={question.id} >
       <Button onClick={this.openEditQ} >Edit</Button>
       <Button onClick={this.deleteQ} >Delete</Button>
       </div>}
    </div>)
  }

  genUserAnswers  = () => {
    return this.props.user.answers.map(answer =>
      <div>
      <h4>{answer.text}</h4>
      <p>For Question {answer.question_id}</p>
      {(this.state.toEditA === answer.id)?
        <Form inline id={answer.id} >
        <FormControl type="text" defaultValue={answer.text} />
        <Button onClick={this.updateA} >Update</Button>
        <Button onClick={this.closeEditA} >Close</Button>
      </Form> :
      <div id={answer.id} >
       <Button onClick={this.openEditA} >Edit</Button>
       <Button onClick={this.deleteA} >Delete</Button>
       </div>}
    </div>)
  }


  componentDidMount() {
    console.log("route test")
  }

  render() {
    if (!this.props.user){
      return null
    }
    return (
      <div>

        <h4>Your Questions</h4>
        {this.genUserQuestions()}
        <h4>Your Answers</h4>
        {this.genUserAnswers()}
      </div>
    );
  }
}



export default UserData;
