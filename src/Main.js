// Whenever you write jsx in your file, you must import the react package
// because jsx is converted to React.createElement function calls.
import React from 'react';
import HelloWorld from './HelloWorld';

function Main (props) {
  return (
    <div className="main">
      <HelloWorld name="Paul" />
      <HelloWorld name="Johanna" />
      <HelloWorld name="Nathan" />
    </div>
  );
}

export default Main;
