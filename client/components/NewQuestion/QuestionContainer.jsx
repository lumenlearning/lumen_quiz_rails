import React from 'react';
import QuestionActions from '../../Actions/QuestionActions'
import QuestionStore from '../../Stores/QuestionStore'
import QuestionContent from './QuestionContent'
import AnswersContainer from './AnswersContainer'
import GuidSearch from './GuidSearch.jsx';

export default class QuestionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = QuestionStore.getState();

    this.onChange = this.onChange.bind(this);
    this.checkMultipleCorrect = this.checkMultipleCorrect.bind(this);
  }

  onChange() {
    this.setState(QuestionStore.getState())
  }

  componentDidMount() {
    QuestionActions.fetch(this.props.params.question_id, this.onChange)
  }

  render() {
    return (
      <div>
        <GuidSearch 
          guid = {this.state.guid}
          handleUpdateGuid = {(guid) => this.handleUpdateGuid(guid)}
        />
        <h3>Question</h3>
        <QuestionContent 
          handleUpdateQuestion = {(text) => this.handleUpdateQuestion(text)}
          content = {this.state.content}
        />
        <br />
        <AnswersContainer 
          answers = {this.state.answers}
          handleUpdateAnswer = {(val, id) => this.handleUpdateAnswer(val, id)}
          handleAddAnswerField = {() => this.handleAddAnswerField()}
          handleDeleteAnswerField = {(id) => this.handleDeleteAnswerField(id)}
          checkMultipleCorrect = {() => this.checkMultipleCorrect()}
        />
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
    QuestionActions.updateGuid(guid, this.props.params.question_id, this.state.guid.id, this.onChange)
  }

  checkMultipleCorrect() {
    let checkedAnswers = []
    let answers = this.state.answers
    for (var key in answers) {
      if (answers.hasOwnProperty(key) && answers[key].correct === true) {
        checkedAnswers.push(answers[key])
      }
    }
    return checkedAnswers.length > 1 ? true : false
  }

}