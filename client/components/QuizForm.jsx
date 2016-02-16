import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class QuizForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {errorText: null}
  }

  render() {
    const styles = {
      button: {
        backgroundColor: '#4bbf6b',
      }
    }

    return (
      <div>
        <h2>Name Your Quiz</h2>
          <TextField
            autoFocus={true}
            errorText={this.state.errorText}
            id='title'
            ref={"quizTitle"}
            underlineStyle={{borderColor:'rgba(0,0,0,0.2)'}}
            underlineFocusStyle={{borderColor:'#4bbf6b'}}
            className='title-input'
          />
          <br /><br />
          <RaisedButton
            id="menu-button"
            label="Add Questions"
            onClick={() => this.handleSubmit()}
            backgroundColor={'#4bbf6b'}
            labelColor={'#fff'}
            className='submit-btn'
          />
      </div>
    )
  }

  handleSubmit() {
    if (this.refs.quizTitle.getValue() != "") {
      const quizName = this.refs.quizTitle.getValue();
      this.writeQuizToApi(JSON.stringify({name: quizName}));
    } else {
      this.setState({
        errorText: "This field is required."
      });
    }
  }

  writeQuizToApi(data) {
    axios({
      url: 'http://localhost:3000/quizzes',
      params: {data},
      method: 'post',
      headers: {'Access-Control-Allow-Origin': '*'}
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }
}