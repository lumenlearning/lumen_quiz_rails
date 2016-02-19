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

  updateAnswer(data, questionID, answerID, callback, callback2) {
    return(dispatch) => {
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID + '/answers/' + answerID,
        method: 'put',
        params: {data},
        headers: {'Access-Control-Allow-Origin': '*'}
      })
      .then(
        (response) => {
          dispatch(response.data)
          callback()
          callback2()
        }
      )
      .catch((response) => {
        console.log(response);
      });
    }
  }

  updateGuid(data, questionID, guidID, callback) {
    return(dispatch) => {
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID + '/guids/' + guidID,
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

  createAnswer(questionID, callback) {
    return(dispatch) => {
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID + '/answers/',
        method: 'post',
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

  deleteAnswer(questionID, answerID, callback) {
    return(dispatch) => {
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID + '/answers/' + answerID,
        method: 'delete',
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

  createQuestion(quizID, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/questions',
        method: 'post',
        params: {quizID},
        headers: {'Access-Control-Allow-Origin': '*'}
      })
      .then(
        (response) => {
          callback(response.data.quiz_id, response.data.id)
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