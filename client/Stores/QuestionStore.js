import alt from '../alt';
import QuestionActions from '../Actions/QuestionActions.js'

class QuestionStore {
  constructor(){
    this.bindListeners({
      set: [QuestionActions.updateQuestion, QuestionActions.fetch, QuestionActions.updateAnswer, QuestionActions.createAnswer, QuestionActions.deleteAnswer]
    });

    this.state = {
      question: {}
    }
  }

  set(data) {
    this.setState({
      question: data
    })
  }
}

export default alt.createStore(QuestionStore);