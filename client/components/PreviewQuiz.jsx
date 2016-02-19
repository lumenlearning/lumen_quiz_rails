import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Snackbar from 'material-ui/lib/snackbar';
import QuizActions from '../Actions/QuizActions';
import QuizStore from '../Stores/QuizStore';

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
  }

  componentDidMount(){
    QuizActions.fetchQuiz(this.props.params.quiz_id, this.onChange)
  }

  onChange() {
    this.setState({quiz: QuizStore.getState()})
  }

  questions() {
    let questions = []
    {this.state.questions.map((question) => {
      questions.push(<PreviewQuestion 
        key = {question.key}
        id = {question.key}
        answers = {question.answers}
        content = {question.content}
        quiz_id = {this.props.params.quiz_id}
        history = {this.props.history}
        deleteQuestion = {(id) => this.deleteQuestion(id)}
        openSnackbar = {() => this.openSnackbar()}
      />)
    })}
    return questions
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
 
  }
}