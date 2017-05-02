import React from 'react';
// const React = require('react');
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld(props) {
  return <h1>{`Hello, ${props.name}`}</h1>
  // Babel translates the above into the below
  // return React.createElement('h1', null, `Hello, ${props.name}`)
}

ReactDOM.render(
  <HelloWorld name="Siobhan" />,
  // The above is transpiled into the below by Babel
  // React.createElement(HelloWorld, {name: 'Siobhan'})
  document.getElementById('root')
);
