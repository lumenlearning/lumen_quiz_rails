import React from 'react';
import QuestionActions from '../../Actions/QuestionActions'
import QuestionStore from '../../Stores/QuestionStore'
import QuestionContent from './QuestionContent'
import AnswersContainer from './AnswersContainer'

export default class QuestionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = QuestionStore.getState();

    this.onChange = this.onChange.bind(this);
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
        <h3>Question</h3>
        <QuestionContent 
          quiz_id = {this.props.params.quiz_id} 
          question_id = {this.props.params.question_id}
          handleUpdateQuestion = {(text) => this.handleUpdateQuestion(text)}
          content = {this.state.question.content}
        />
        <br />
        <AnswersContainer 
          quiz_id = {this.props.params.quiz_id} 
          question_id = {this.state.question_id}
          answers = {this.state.question.answers}
          handleUpdateAnswer = {(val, id) => this.handleUpdateAnswer(val, id)}
          handleAddAnswerField = {() => this.handleAddAnswerField()}
          handleDeleteAnswerField = {(id) => this.handleDeleteAnswerField(id)}
        />
      </div>
    )
  }

  handleUpdateQuestion(text) {
    QuestionActions.updateQuestion(text,this.props.params.question_id, this.onChange);
  }

  handleUpdateAnswer(val, id) {
    QuestionActions.updateAnswer(val, this.props.params.question_id, id, this.onChange)
  }

  handleAddAnswerField() {
    QuestionActions.createAnswer(this.props.params.question_id, this.onChange)
  }

  handleDeleteAnswerField(id) {
    QuestionActions.deleteAnswer(this.props.params.question_id, id, this.onChange)
  }
}