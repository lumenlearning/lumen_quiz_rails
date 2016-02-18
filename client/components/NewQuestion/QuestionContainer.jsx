import React from 'react';
import QuestionContent from './QuestionContent'
import QuestionActions from '../../Actions/QuestionActions'
import QuestionStore from '../../Stores/QuestionStore'

export default class QuestionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = QuestionStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    QuestionActions.fetch(this.props.params.question_id, this.onChange)
  }

  render() {
    return (
      <div>
        <h3>Question</h3>
        <QuestionContent 
          quiz_id={this.props.params.quiz_id} 
          question_id={this.props.params.question_id}
          handleUpdateQuestion={(text) => this.handleUpdateQuestion(text)}
          content={this.state.question.content}
        />
        <br />
      </div>
    )
  }

  handleUpdateQuestion(text) {
    QuestionActions.update(text,this.props.params.question_id, this.onChange);
  }

  onChange() {
    this.setState(QuestionStore.getState())
  }
}