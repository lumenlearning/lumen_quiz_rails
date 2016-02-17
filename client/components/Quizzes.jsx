import React from 'react';
import axios from 'axios';
import Quiz from './Quiz';
import QuizStore from '../Stores/QuizStore.js'
import QuizActions from '../Actions/QuizActions.js'

export default class Quizzes extends React.Component {
  constructor(props) {
    super(props)
    this.state = QuizStore.getState();
  }

  componentDidMount() {
    QuizActions.fetchAllQuizzes(() => this.setState(QuizStore.getState()));
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