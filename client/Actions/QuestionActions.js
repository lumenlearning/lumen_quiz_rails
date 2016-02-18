import alt from '../alt';
import axios from 'axios';

class QuestionActions {
  updateQuestion(data, questionID, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID,
        method: 'put',
        params: {data},
        headers: {'Access-Control-Allow-Origin': '*'}
      })
      .then(
        (response) => {
          dispatch(response.data)
          callback()
        }
      )
      .catch((response) => {
        console.log(response);
      });
    }
  }

  updateAnswer(data, answerID, callback) {
    return(dispatch) => {
      axios({
        url: 'http://localhost:3000' + '/answers/' + answerID,
        method: 'put',
        params: {data},
        headers: {'Access-Control-Allow-Origin': '*'}
      })
      .then(
        (response) => {
          dispatch(response.data)
          callback()
        }
      )
      .catch((response) => {
        console.log(response);
      });
    }
  }

  fetch(questionID, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID,
        method: 'get',
        headers: {'Access-Control-Allow-Origin': '*'}
      })
      .then(
        (response) => {
          dispatch(response.data)
          callback()
        }
      )
      .catch((response) => {
        console.log(response);
      });
    }
  }
}

export default alt.createActions(QuestionActions);