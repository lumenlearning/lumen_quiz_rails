import React from 'react';
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
        <br />
        {this.state.quizzes.map((quiz) => {
          return (
            <Quiz 
              name = {quiz.name} 
              key = {quiz.id} 
              id = {quiz.id} 
              handlePreviewQuiz = {(id) => this.handlePreviewQuiz(id)}
            />
          )
        })}
      </div>
    )
  }

  handlePreviewQuiz(id) {
    this.props.history.pushState(null, '/quizzes/' + id + '/preview')
  }
}