import React from 'react';
import { Form, Button } from "react-bootstrap/lib";

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


class QuestionShow extends React.Component {

  state = {
    questionData: null
  }

  componentDidMount() {
    console.log("show")
    fetch(BackendUrl+"/questions/"+this.props.id)
      .then(response => response.json())
      .then((res) => this.setState({ questionData: res }))
  }

  genAnswers = () => {
    // return <div></div>
    return this.state.questionData.answers.map(answer =>
      <div key={answer.id}>
      <h4>{answer.text}</h4>
    </div>)
  }

  genAnswerForm = () => {
    return (<div>
      </div>)
  }

  render(){
  console.log(this.state)
  if(!this.state.questionData){
    return null
  }
  return (
    <div>
      <Card>
      <Card.Body>
        <Card.Title>{this.state.questionData.text}</Card.Title>
        <Card.Text>
          <p>Display Answers</p>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
   )
  }
};

export default QuestionShow;
