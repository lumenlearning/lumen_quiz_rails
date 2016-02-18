import React from 'react';
import Answer from './Answer.jsx';
import Rebase from 're-base';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import FlatButton from 'material-ui/lib/flat-button';
import AddCircleOutline from 'material-ui/lib/svg-icons/content/add-circle-outline';
import Help from 'material-ui/lib/svg-icons/action/help-outline';
import Popover from 'material-ui/lib/popover/popover';

const base = Rebase.createClass('https://lumenquiz.firebaseio.com/');

const styles = {
  add: {
    cursor:'pointer', 
    top:'15px', 
    right:'20px', 
    width:'2rem', 
    height:'2rem'
  },
  help: {
    cursor:'pointer', 
    width:'1.4rem', 
    height:'1.4rem',
  },
  popover: {
    padding: '20px',
    fontWeight: '500',
    backgroundColor: '#245693',
    color: '#fff'
  }
}

export default class AnswersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      helpMessage: ''
    }
  }
  answerFields() {
    var answers = []
    if (this.props.answers) {
      for (var i = 0; i < this.props.answers.length; i++) {
        answers.push(
          <Answer 
            key={this.props.answers[i].id}
            quiz_id={this.props.quiz_id}
            question_id = {this.props.question_id}
            id={this.props.answers[i].id}
            deleteAnswerField={(id) => this.deleteAnswerField(id)}
            content = {this.props.answers[i].content}
            correct = {this.props.answers[i].correct}
            handleUpdateAnswer = {(val, id) => this.handleUpdateAnswer(val, id)}
          />
        )
      }
    }
    return answers
  }

  render() {
    let header = this.state.multipleCorrect ? 'Answers: Multiple Correct' : 'Answers: Multiple Choice'
    return (
      <div>
        <h3>
          <Help 
            onClick={(e) => this.helpPopover(e)} 
            style={styles.help}
            color='#777'
            hoverColor='#333'
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
            targetOrigin={{horizontal: 'middle', vertical: 'top'}}
            onRequestClose={() => this.handleRequestClose()}
            canAutoPosition={true}
          >
            <div style={styles.popover}>{this.state.helpMessage}</div>
          </Popover>
          &nbsp; {header}
        </h3>
        {this.answerFields()}

        <AddCircleOutline
        onClick={() => this.addAnswerField()}
        color={'#4bbf6b'}
        hoverColor={'#389652'}
        style={styles.add}
         />
        <br /><br />
      </div>
    )
  }

  helpPopover(e) {
    let message = "To mark an answer as correct, click on the checkbox on the left. \
    To delete, click on the red x to the right of the answer. \
    To add another answer, click on the green plus at the bottom."
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
      helpMessage: message
    });
  }

  handleRequestClose(){
    this.setState({
      open: false,
    });
  };

  deleteAnswerField(id) {
  }

  addAnswerField() {
  }

  handleUpdateAnswer(val, id) {
    this.props.handleUpdateAnswer(val, id)
  }

}
