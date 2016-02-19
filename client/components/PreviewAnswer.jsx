import React from 'react';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import Checkbox from 'material-ui/lib/svg-icons/navigation/check';
import TinyMCEInput from 'react-tinymce-input';

const styles = {
  checkbox: {
    width:'1.6rem', 
    height:'1.6rem'
  }
}

export default class PreviewAnswer extends React.Component {
  renderCheckbox() {
    if (this.props.correct) {return <Checkbox style={styles.checkbox} color={'#4bbf6b'} />}
  }

  componentDidMount() {
    let selector = '#answer-' + this.props.question_id + '-' + this.props.id
    tinymce.init({
      selector: selector,
      inline: true,
      toolbar: 'undo redo save',
      menubar: false,
      plugins: 'save',
      save_onsavecallback: (obj) => this.editAnswerInline(obj.targetElm.innerText)
    });
  }

  componentWillUnmount() {
    let editorID = 'answer-' + this.props.question_id + '-' + this.props.id 
    tinymce.EditorManager.get(editorID).remove();
  }

  render() {
    let dynamicStyles = {  
      padding: '15px',
      margin: '10px',
      border: this.props.content === '' ? '2px solid #c83637' : 'transparent'
    }
    return (
      <Paper zDepth={1} style={dynamicStyles} className='preview-answer-wrapper'>
        <span className='preview-answer-num'>{this.props.number}.</span>
        <div id={'answer-' + this.props.question_id + '-' + this.props.id} className='preview-answer-content'>{this.props.content}</div>
        <span className='preview-answer-checkbox'>{this.renderCheckbox()}</span>
      </Paper>
    )
  }

  editAnswerInline(obj) {
    this.props.handleEditAnswerInline(obj, this.props.id)
    this.props.openSnackbar();
  }
}