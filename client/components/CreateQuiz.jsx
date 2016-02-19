import React from 'react';
import Quizzes from './Quizzes';
import QuizForm from './QuizForm';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuizzes: false,
    }
  }

  render() {
    return (
      <div>
        <QuizForm history={this.props.history} />
        <br /><br /><br />
        <RaisedButton 
          label={this.state.showQuizzes ? "Hide Quizzes" : "Display All Quizzes"}
          onClick={() => this.toggleQuizzes()} 
          backgroundColor={'#4bbf6b'}
          labelColor={'#fff'}
          className='submit-button'
        />
        {this.state.showQuizzes ? <Quizzes history={this.props.history} /> : null}
      </div>
    )
  }

  toggleQuizzes() {
    this.state.showQuizzes ? this.setState({showQuizzes:false}) : this.setState({showQuizzes:true})
  }

}