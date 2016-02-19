import alt from '../alt';
import QuizActions from '../Actions/QuizActions.js'

class QuizStore {
  constructor(){
    this.bindListeners({
      set: [QuizActions.fetchQuiz],
    });
    this.state = {}
  }

  set(data) {
    this.setState(data)
    debugger;
  }

}

export default alt.createStore(QuizStore);