import alt from '../alt';
import axios from 'axios';

class QuestionActions {
  updateQuestion(data, questionID, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID,
        method: 'put',
        params: {data},
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

  deleteQuestion(questionID, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID,
        method: 'delete',
      })
      .then(
        (response) => {
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