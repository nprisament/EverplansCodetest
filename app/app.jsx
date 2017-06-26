const React = require('react');
const ReactDOM = require('react-dom');
const {Route, HashRouter} = require('react-router-dom');

const Main = require('Main');
const Attend = require('Attend');
const Activities = require('Activities');

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={Main}/>
  </HashRouter>,
  document.getElementById('app')
);