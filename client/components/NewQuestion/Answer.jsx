import React from 'react';
import Cancel from 'material-ui/lib/svg-icons/navigation/cancel';
import Checkbox from 'material-ui/lib/checkbox';
import CheckboxMultiple from 'material-ui/lib/svg-icons/action/check-circle';
import CheckboxSingle from 'material-ui/lib/svg-icons/toggle/radio-button-checked';
import Unchecked from 'material-ui/lib/svg-icons/toggle/radio-button-unchecked';
import TextField from 'material-ui/lib/text-field';

const styles = {
  cancel: {
    cursor:'pointer', 
    position:'absolute', 
    top:'15px', 
    right:'20px', 
    width:'2rem', 
    height:'2rem'
  }
}

export default class Answer extends React.Component {
  render() {
    return (
      <div className="answer-wrapper">
        <Checkbox
          label=''
          onClick={() => this.correctnessToggle()}
          checked={this.props.correct}
          iconStyle={{fill:'rgb(75, 191, 107)', width:'2rem', height:'2rem'}}
          style={{position:'absolute', top:'10px', width:'10px'}}
          checkedIcon={this.props.checkMultipleCorrect() == true ? <CheckboxMultiple /> : <CheckboxSingle />}
          unCheckedIcon={<Unchecked />}
        />
        <textarea 
          defaultValue={this.props.content} 
          onBlur ={(e) => this.updateAnswer(e)} 
        />
        <Cancel 
          className = "btn1" 
          onClick = {() => this.deleteAnswerField()}
          color = {'#c83637'}
          hoverColor = {'#b72f2f'}
          style = {styles.cancel}
        />
      </div>
    )
  }

  validateAnswers() {
  }

  deleteAnswerField() {
    this.props.handleDeleteAnswerField(this.props.id)
  }

  correctnessToggle() {
    this.props.correct ? this.props.handleUpdateAnswer(false, this.props.id) : this.props.handleUpdateAnswer(true, this.props.id)
  }

  updateAnswer(e) {
    let val = e.target.value
    this.props.handleUpdateAnswer(val, this.props.id)
  }
}
