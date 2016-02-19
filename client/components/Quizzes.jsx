import React from 'react';
import axios from 'axios';
import Quiz from './Quiz';
import QuizzesStore from '../Stores/QuizzesStore.js'
import QuizzesActions from '../Actions/QuizzesActions.js'

export default class Quizzes extends React.Component {
  constructor(props) {
    super(props)
    this.state = QuizzesStore.getState();
  }

  componentDidMount() {
    QuizzesActions.fetchAllQuizzes(() => this.setState(QuizzesStore.getState()));
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