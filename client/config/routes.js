import React from 'react';
import Home from '../components/Home';
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
    <Route path="/" component={Home}>
    </Route>
  </Router>
);