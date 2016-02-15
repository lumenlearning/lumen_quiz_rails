import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes.js';
import Main from './components/Main'
import './styles/app.scss';

ReactDOM.render(routes, document.getElementById('app'));