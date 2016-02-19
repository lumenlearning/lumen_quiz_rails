import alt from '../alt';
import QuizActions from '../Actions/QuizActions.js'

class QuizStore {
  constructor(){
    this.bindListeners({
      set: [QuizActions.fetchQuiz, QuizActions.deleteQuestion],
    });
    this.state = {}
  }

  set(data) {
    this.setState(data)
  }

}

export default alt.createStore(QuizStore);