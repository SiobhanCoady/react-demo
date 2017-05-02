// Whenever you write jsx in your file, you must import the react package
// because jsx is converted to React.createElement function calls.
import React from 'react';
import HelloWorld from './HelloWorld';
import BlueSquare from './BlueSquare';

function Main (props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div style={style} className="main">
      <HelloWorld name="Paul" />
      <HelloWorld name="Johanna" />
      <HelloWorld name="Nathan" />
      <BlueSquare />
    </div>
  );
}

export default Main;
