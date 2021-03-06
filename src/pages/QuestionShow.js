import React from 'react';
import Form from 'react-bootstrap/lib/Form'
// import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Card from 'react-bootstrap/lib/Card'

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
    questionData: null,
    newAnswer: ""
  }

  componentDidMount() {
    console.log("show")
    fetch(BackendUrl+"/questions/"+this.props.id)
      .then(response => response.json())
      .then((res) => this.setState({ questionData: res }))
  }

  reload = () => {

  }

  genAnswers = () => {
    console.log(this.state)
    if(!this.state.questionData.answers){
      return null
    }
    return this.state.questionData.answers.map(answer =>
      <div key={answer.id}>
      <h4>{answer.text}</h4>
      <p>By User{answer.user_id}</p>
    </div>)
  }

  postAnswer= () => {
    postBackendData("answers",
    JSON.stringify({"answer": {"user_id":this.props.user.id,
     "text": this.state.newAnswer,
      "question_id": this.state.questionData.id }}), this.props.reload)

  }

  handleChange = (e) => {
    this.setState({ newAnswer: e.target.value });
  };

  genAnswerForm = () => {
    return (<div>
      <Form  >
        <Form.Group controlId="name">
          <Form.Label>New Answer</Form.Label>
          <Form.Control placeholder="Enter Answer" name="answer" onChange={this.handleChange} />
        </Form.Group>

        <Button variant="primary" onClick={this.postAnswer}>
          Submit
        </Button>
      </Form>
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
          {this.genAnswers()}
          {this.props.user ? this.genAnswerForm() : null}
      </Card.Body>
      </Card>
    </div>
   )
  }
};

export default QuestionShow;
