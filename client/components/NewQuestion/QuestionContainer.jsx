import React from 'react';
import QuestionContent from './QuestionContent'
export default class QuestionContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h3>Question</h3>
        <QuestionContent 
          quiz_id={this.props.params.quiz_id} 
        />
        <br />
      </div>
    )
  }
}