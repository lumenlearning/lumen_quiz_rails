import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

export default class Main extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      quizName: 'Quiz Builder',
      page: 'Create Quiz'
    }
  }

  componentDidMount(){
    this.fetchState(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.fetchState(nextProps);
  }

  fetchState(props) {
    if (props.location.pathname.indexOf('preview') !== -1) {
      this.setState({
        page: 'Quiz Preview'
      })
    } else if (props.location.pathname.indexOf('questions') !== -1) {
      this.setState({
        page: 'Create Question'
      })
    }
    // Need to set quiz name as well
  }

  render() {
    return (
      <Toolbar className="bar-top">
        <ToolbarGroup float="left">
          <ToolbarTitle className="top-color quiz-title" text={this.state.quizName} />
        <ToolbarSeparator className="tb-separator" />
        <ToolbarTitle className="top-color-secondary page-title" text={this.state.page} />
        </ToolbarGroup>
        <ToolbarGroup float="right">
        </ToolbarGroup>
      </Toolbar>
    )
  }
}