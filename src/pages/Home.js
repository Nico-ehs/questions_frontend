
import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/lib/CardDeck'
import QuestionCard from '../components/QuestionCard'

const BackendUrl = "http://localhost:3000/"


class Home extends Component {

  state={
    date: null
  }

  genQuestions = () => {
    if (!this.state.data){
      return null
    }
    console.log(this.state.data)
    return this.state.data.map(question => <QuestionCard key={question.id} cardData={question} />)
  }

  componentDidMount() {
    fetch(BackendUrl+"/questions")
      .then(response => response.json())
      .then((res) => this.setState({ data: res }))
  }

  render() {

    return (
      <div>
        <CardDeck>
        {this.genQuestions()}
        </CardDeck>
      </div>
    );
  }
}

export default Home;
