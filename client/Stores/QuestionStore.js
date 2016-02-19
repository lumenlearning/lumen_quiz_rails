import alt from '../alt';
import QuestionActions from '../Actions/QuestionActions.js'

class QuestionStore {
  constructor(){
    this.bindListeners({
      set: [QuestionActions.updateQuestion, QuestionActions.fetch, QuestionActions.updateAnswer, QuestionActions.createAnswer, QuestionActions.deleteAnswer, QuestionActions.updateGuid]
    });

    this.state = {}
  }

  set(data) {
    this.setState(data)
  }
}

export default alt.createStore(QuestionStore);