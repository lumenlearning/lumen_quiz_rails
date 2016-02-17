import alt from '../alt';
import QuizActions from '../Actions/QuizActions.js'

class QuizStore {
  constructor(){
    this.bindListeners({
      handleFetchAllQuizzes: QuizActions.fetchAllQuizzes
    });
    this.quizzes = []
  }

  handleFetchAllQuizzes(quizzes) {
    this.quizzes = quizzes
  }
}

export default alt.createStore(QuizStore);