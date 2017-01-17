import React from 'react';
import ReactDOM from 'react-dom';
var App = require('./components/App');
import './index.css';
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('root')
);
