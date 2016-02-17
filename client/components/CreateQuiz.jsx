import React from 'react';
import Quizzes from './Quizzes';
import QuizForm from './QuizForm';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <QuizForm history={this.props.history} />
        <Quizzes />
      </div>
    )
  }
}