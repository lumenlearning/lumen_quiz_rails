import React from 'react';
import QuestionActions from '../../Actions/QuestionActions'
import QuestionStore from '../../Stores/QuestionStore'
import QuestionContent from './QuestionContent'
import AnswersContainer from './AnswersContainer'
import GuidSearch from './GuidSearch.jsx';
import RaisedButton from 'material-ui/lib/raised-button';
import Popover from 'material-ui/lib/popover/popover';

const popoverStyles = {
  padding: '10px',
  fontWeight: '500',
  backgroundColor: '#c83637',
  color: '#fff'
}

export default class QuestionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: QuestionStore.getState(),
      errorMessage: '',
      open: false,
      anchorEl: null,
    }

    this.onChange = this.onChange.bind(this);
    this.transitionQuestion = this.transitionQuestion.bind(this);
    this.checkMultipleCorrect = this.checkMultipleCorrect.bind(this);
  }

  componentDidMount() {
    QuestionActions.fetch(this.props.params.question_id, this.onChange)
  }

  componentWillReceiveProps(nextProps) {
    QuestionActions.fetch(nextProps.params.question_id, this.onChange)
  }

  onChange() {
    this.setState({question: QuestionStore.getState()})
  }

  handleError(e, errors) {
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
      errorMessage: errors
    });
  };

  handleRequestClose(){
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <GuidSearch 
          guid = {this.state.question.guid}
          handleUpdateGuid = {(guid) => this.handleUpdateGuid(guid)}
        />
        <h3>Question</h3>
        <QuestionContent 
          handleUpdateQuestion = {(text) => this.handleUpdateQuestion(text)}
          content = {this.state.question.content}
        />
        <br />
        <AnswersContainer 
          answers = {this.state.question.answers}
          handleUpdateAnswer = {(val, id) => this.handleUpdateAnswer(val, id)}
          handleAddAnswerField = {() => this.handleAddAnswerField()}
          handleDeleteAnswerField = {(id) => this.handleDeleteAnswerField(id)}
          checkMultipleCorrect = {() => this.checkMultipleCorrect()}
        />
        <RaisedButton 
          label="Save & Add Question" 
          onClick={(e) => this.validateAndSubmit(e)} 
          backgroundColor={'#4bbf6b'}
          labelColor={'#fff'}
          className='submit-button'
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          onRequestClose={() => this.handleRequestClose()}
        >
          <div style={popoverStyles}>{this.state.errorMessage}</div>
        </Popover>
      </div>
    )
  }

  handleUpdateQuestion(text) {
    QuestionActions.updateQuestion(text,this.props.params.question_id, this.onChange);
  }

  handleUpdateAnswer(val, id) {
    QuestionActions.updateAnswer(val, this.props.params.question_id, id, this.onChange, this.checkMultipleCorrect)
  }

  handleAddAnswerField() {
    QuestionActions.createAnswer(this.props.params.question_id, this.onChange)
  }

  handleDeleteAnswerField(id) {
    QuestionActions.deleteAnswer(this.props.params.question_id, id, this.onChange)
  }

  handleUpdateGuid(guid) {
    QuestionActions.updateGuid(guid, this.props.params.question_id, this.state.question.guid.id, this.onChange)
  }

  checkMultipleCorrect() {
    let checkedAnswers = []
    let answers = this.state.question.answers
    for (var key in answers) {
      if (answers.hasOwnProperty(key) && answers[key].correct === true) {
        checkedAnswers.push(answers[key])
      }
    }
    return checkedAnswers.length > 1 ? true : false
  }

  validateAndSubmit(e) {
    let errors = ''
    let emptyAnswers = []
    let checkedAnswers = []
    let question = this.state.question
    let answers = question.answers
    for (var key in answers) {
      if (answers.hasOwnProperty(key) && answers[key].content === '') {
        emptyAnswers.push(answers[key])
      }
      if (answers.hasOwnProperty(key) && answers[key].correct === true) {
        checkedAnswers.push(answers[key])
      }
    }
    if (question.content === '') {
      errors = errors + "You must fill out the question field. " 
    }
    if (emptyAnswers.length > 0 ) {
      errors = errors + "You must fill out all of the answer fields or delete empty ones. " 
    }
    if (checkedAnswers.length === 0 ) {
      errors = errors + "You must include at least one correct answer. " 
    }
    if (question.guid.short_title === '') {
      errors = errors + "You must align the question with a Learning Outcome." 
    }
    if (errors !== '') {
      this.handleError(e, errors)
    } else if (errors === '' && e.target.parentElement.parentElement.parentElement.className === 'submit-button') {
      QuestionActions.createQuestion(this.props.params.quiz_id, this.transitionQuestion)
    }
  }

  transitionQuestion(quizID, questionID) {
    this.props.history.pushState(null, "/quizzes/" + quizID + '/questions/' + questionID)
  }

}