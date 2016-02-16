import React from 'react';
import Quizzes from './Quizzes';
import QuizForm from './QuizForm';
import TopBar from './TopBar';

export default class Main extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <TopBar location={this.props.location} />
        <QuizForm />
        <Quizzes />
      </div>
    )
  }
}