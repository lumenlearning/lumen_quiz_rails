import alt from '../alt';
import axios from 'axios';

class QuizActions {
  fetchAllQuizzes(callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000' + '/quizzes',
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

export default alt.createActions(QuizActions);