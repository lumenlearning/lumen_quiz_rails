import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Snackbar from 'material-ui/lib/snackbar';
import QuizActions from '../Actions/QuizActions';
import QuestionActions from '../Actions/QuestionActions';
import QuizStore from '../Stores/QuizStore';
import PreviewQuestion from './PreviewQuestion.jsx'
import _ from 'lodash'

const styles = {
  snackbar: {
    backgroundColor: '#245693'
  }
}

export default class PreviewQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snackMessage: '',
      quiz: QuizStore.getState()
    }

    this.onChange = this.onChange.bind(this);
    this.transitionQuestion = this.transitionQuestion.bind(this);
  }

  componentDidMount(){
    QuizActions.fetchQuiz(this.props.params.quiz_id, this.onChange)
  }

  onChange() {
    this.setState({quiz: QuizStore.getState()})
  }

  questions() {
    let questions = []
    if (this.state.quiz.questions) {
      {this.state.quiz.questions.map((question) => {
        questions.push(<PreviewQuestion 
          key = {question.id}
          id = {question.id}
          answers = {question.answers}
          content = {question.content}
          quiz_id = {this.props.params.quiz_id}
          history = {this.props.history}
          deleteQuestion = {(id) => this.deleteQuestion(id)}
          openSnackbar = {() => this.openSnackbar()}
          handleEditQuestionInline = {(text,questionID) => this.handleEditQuestionInline(text,questionID)}
          handleEditAnswerInline = {(val, questionID, id) => this.handleEditAnswerInline(val, questionID, id)}
        />)
      })}
    }
    return _.sortBy(questions, 'key')
  }

  render() {
    return (
      <div>
        <Snackbar
          open = {this.state.open}
          message = {this.state.snackMessage}
          autoHideDuration = {2000}
          onRequestClose = {() => this.closeSnackbar()}
          bodyStyle={styles.snackbar}
        />
        <FlatButton 
          className="top-button" 
          label="Add New Question" 
          default={true} 
          onClick={(e) => this.addNewQuestion(e)}
        />
        {this.questions()}
      </div>
    )
  }

  openSnackbar() {
    this.setState({
      open: true,
      snackMessage: 'Your edits were successfully saved.'
    });
  }

  closeSnackbar() {
    this.setState({
      open: false,
      snackMessage: ''
    });
  }

  deleteQuestion(id) {
  }

  addNewQuestion() {
    QuestionActions.createQuestion(this.props.params.quiz_id, this.transitionQuestion)
  }

  handleEditQuestionInline(text, questionID) {
    QuestionActions.updateQuestion(text, questionID, this.onChange);
  }

  handleEditAnswerInline(val, questionID, id) {
    QuestionActions.updateAnswer(val, questionID, id, this.onChange);
  }

  transitionQuestion(quizID, questionID) {
    this.props.history.pushState(null, "/quizzes/" + quizID + '/questions/' + questionID)
  }
}