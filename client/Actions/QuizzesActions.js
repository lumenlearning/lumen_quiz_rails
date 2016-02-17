import alt from '../alt';
import axios from 'axios';

class QuizzesActions {
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

  writeQuizToApi(data, callback) {
    return (dispatch)=>{
      axios({
        url: 'http://localhost:3000/quizzes',
        params: {data},
        method: 'post',
        headers: {'Access-Control-Allow-Origin': '*'}
      })
      .then(
        (response) => {
          dispatch(response.data)
          callback(response.data.id)
        }
      )
      .catch((response) => {
        console.log(response);
      });
    }
  }
}

export default alt.createActions(QuizzesActions);