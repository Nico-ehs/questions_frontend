import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

const BackendUrl = "http://localhost:3000/"

class QuestionShow extends React.Component {



  componentDidMount() {
    fetch(BackendUrl+"/events")
      .then(response => response.json())
      .then((res) => this.setState({ events: res }))
  }

  genAnswers = () => {
    // return <div></div>
    if (!this.props.user){
      return this.props.eventData.outcomes.map(outcome =>
        <div key={outcome.id}>
        <h4>{outcome.name} {outcome.prediction_value}</h4>
      </div>)
    }
    return this.props.eventData.outcomes.map(outcome =>
      <div key={outcome.id}>
      <h4>{outcome.name} {outcome.prediction_value}</h4>
      <Form inline id={outcome.id} onSubmit={(event) => this.props.placeBet(event)} >
      <FormControl type="text" defaultValue="100" />
      <Button variant="outline-success" type="submit">PlaceBet</Button>
    </Form>
    </div>)
  }

  genAnswerForm = () => {

  }

  render(){

   return (
      <div style={{ width: '18rem' }} key={this.key}>

      </div>
   );
  }

};

export default QuestionShow;
