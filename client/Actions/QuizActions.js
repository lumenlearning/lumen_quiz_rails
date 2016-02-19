import alt from '../alt';
import axios from 'axios';

class QuizActions {
  deleteQuestion(questionID, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/questions/' + questionID,
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

  getQuizName(quizID, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/quizzes/' + quizID,
        method: 'get',
      })
      .then(
        (response) => {
          callback(response.data.name)
        }
      )
      .catch((response) => {
        console.log(response);
      });
    }
  }
}

export default alt.createActions(QuizActions);