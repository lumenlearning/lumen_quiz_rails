import alt from '../alt';
import axios from 'axios';

class QuizzesActions {
  fetchAllQuizzes(callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/quizzes',
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

  fetchQuiz(quizID, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/quizzes/' + quizID,
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

  create(data, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000/quizzes',
        params: {data},
        method: 'post',
      })
      .then(
        (response) => {
          dispatch(response.data)
          callback(response.data.id, response.data.questions[0].id)
        }
      )
      .catch((response) => {
        console.log(response);
      });
    }
  }
}

export default alt.createActions(QuizzesActions);