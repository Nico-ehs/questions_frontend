
import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/lib/CardDeck'
import QuestionCard from '../components/QuestionCard'

const BackendUrl = "http://localhost:3000/"


class Home extends Component {

  genQuestions = () => {

    
  }

  componentDidMount() {
    // fetch(BackendUrl+"/questions")
    //   .then(response => response.json())
    //   .then((res) => this.setState({ events: res }))
  }

  render() {

    return (
      <div>
        test1
        <CardDeck>
        {this.genQuestions()}
        </CardDeck>
      </div>
    );
  }
}

export default Home;
