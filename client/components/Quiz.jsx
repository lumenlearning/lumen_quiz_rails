import React from 'react';

export default class Quiz extends React.Component {
  render() {
    return (
      <div className="quiz-list-name" onClick={() => this.previewQuiz()}>
        {this.props.name}
      </div>
    )
  }

  previewQuiz() {
    this.props.handlePreviewQuiz(this.props.id)
  }
}