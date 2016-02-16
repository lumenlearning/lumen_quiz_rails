import React from 'react';
import axios from 'axios';
import Quiz from './Quiz';

export default class Quizzes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quizzes: []
    }
  }

  componentDidMount() {
    this.getQuizzesFromApi();
  }

  getQuizzesFromApi() {
    axios({
      url: 'http://localhost:3000' + '/quizzes',
      method: 'get',
      headers: {'Access-Control-Allow-Origin': '*'}
    })
    .then(
      (response) => this.setState({
        quizzes: response.data
      })
    )
  }

  render() {
    return (
      <div>
        {this.state.quizzes.map((quiz) => {
          return <Quiz name={quiz.name} key={quiz.id} />
        })}
      </div>
    )
  }
}