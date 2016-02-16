import React from 'react';

export default class Quiz extends React.Component {
  render() {
    return (
      <div className="quiz-list-name">
        {this.props.name}
      </div>
    )
  }
}