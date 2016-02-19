import alt from '../alt';
import QuizzesActions from '../Actions/QuizzesActions.js'

class QuizzesStore {
  constructor(){
    this.bindListeners({
      handleFetchAllQuizzes: QuizzesActions.fetchAllQuizzes,
      handleCreate: QuizzesActions.create
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

export default alt.createStore(QuizzesStore);