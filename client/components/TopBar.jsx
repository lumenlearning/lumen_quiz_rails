import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import QuizActions from '../Actions/QuizActions';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      quizName: 'Quiz Builder',
      page: 'Create Quiz'
    }

    this.setName = this.setName.bind(this);
  }

  componentDidMount(){
    this.fetchState(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.fetchState(nextProps);
  }

  fetchState(props) {
    if (props.location.pathname.indexOf('preview') !== -1) {
      this.setState({page: 'Quiz Preview'})
    } else if (props.location.pathname.indexOf('questions') !== -1) {
      this.setState({page: 'Create Question'})
    }
    if (this.props.quiz_id) {
      QuizActions.getQuizName(this.props.quiz_id, this.setName)
    }
  }

  setName(name) {
    this.setState({quizName: name})
  }

  render() {
    return (
      <Toolbar className="bar-top">
        <ToolbarGroup float="left">
          <ToolbarTitle className="top-color quiz-title" text={this.state.quizName} />
        <ToolbarSeparator className="tb-separator" />
        <ToolbarTitle className="top-color-secondary page-title" text={this.state.page} />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}