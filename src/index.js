import React from 'react';
// const React = require('react');
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';


ReactDOM.render(
  // <HelloWorld name="Siobhan" />,
  // The above is transpiled into the below by Babel
  // React.createElement(HelloWorld, {name: 'Siobhan'})
  <Main />,
  document.getElementById('root')
);
