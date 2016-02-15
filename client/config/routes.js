import React from 'react';
import Main from '../components/Main';
import {createHistory} from 'history';
import { Route, IndexRoute, Router, RouterContext } from 'react-router';

export default class NotFound extends React.Component {
  render() {
    return (
      <h1>NO HEREEEEEEEE</h1>
    )
  }
}

export default (
  <Router history={createHistory()}>
    <Route path="/moo" component={Main}>
    </Route>
  </Router>
);