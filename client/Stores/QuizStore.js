import alt from '../alt';
import QuizActions from '../Actions/QuizActions.js'

class QuizStore {
  constructor(){
    this.bindListeners({
      handleFetchAllQuizzes: QuizActions.fetchAllQuizzes,
      handleCreate: QuizActions.create
    });
    this.quizzes = []
  }

  handleFetchAllQuizzes(quizzes) {
    this.quizzes = quizzes
  }

  handleCreate(quiz) {
    this.quizzes = this.quizzes.concat(quiz)
  }
}

export default alt.createStore(QuizStore);