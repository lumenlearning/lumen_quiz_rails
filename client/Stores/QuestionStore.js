import alt from '../alt';
import QuestionActions from '../Actions/QuestionActions.js'

class QuestionStore {
  constructor(){
    this.bindListeners({
      set: [QuestionActions.update, QuestionActions.fetch]
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