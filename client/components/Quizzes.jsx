import React from 'react';
import axios from 'axios';

export default class Quizzes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getQuizzesFromApi();
  }

  getQuizzesFromApi() {
    axios.get('http://localhost:3000' + '/quizzes')
    .then(
      (response) => this.setState({
        data: response.data
      })
    )
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}