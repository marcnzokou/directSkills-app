
import React from 'react';
import ReactDOM from 'react-dom';

// shared
import * as shared from './shared';

// components
import Home from './components/Home.jsx';

var t = shared.api.heros.getAll();

console.log(t);

ReactDOM.render(
  <Home /> ,
  document.querySelector('#root')
);