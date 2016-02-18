import React from 'react';
import CreateQuiz from '../components/CreateQuiz';
import Home from '../components/Home';
import QuestionContainer from '../components/NewQuestion/QuestionContainer';
import {createHistory} from 'history';
import { Route, IndexRoute, Router, RouterContext } from 'react-router';

export default class NotFound extends React.Component {
  render() {
    return (
      <h1>Sorry, we couldn't find that page.</h1>
    )
  }
}

export default (
  <Router history={createHistory()}>
    <Route path="/" component={Home} >
      <IndexRoute component={CreateQuiz} /> 
      <Route path="quizzes/:quiz_id/questions/:question_id" component={QuestionContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);