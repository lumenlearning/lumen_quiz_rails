import React from 'react';
import Quizzes from './Quizzes';
import QuizForm from './QuizForm';
import TopBar from './TopBar';

export default class Home extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {

    }
  }

  render() {
    return (
      <div className="main-container">
        <TopBar location={this.props.location} />
        <div className="container">
          <QuizForm />
          <Quizzes />
        </div>
      </div>
    )
  }
}