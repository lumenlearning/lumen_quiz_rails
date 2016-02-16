import React from 'react';
import Quizzes from './Quizzes';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Quizzes origin={() => this.origin()} readFromAPI={(url) => this.readFromAPI(url)} />
      </div>
    )
  }
}