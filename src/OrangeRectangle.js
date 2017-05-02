import React from 'react';
// Using braces when importing will allow access to exports that are not
// default
import { BlueSquare } from './Square';

function OrangeRectangle(props) {
  const style = {
    display: 'flex',
    alignItems: 'center',
    height: `${100 + 20 * 2}px`,
    width: `${100 * 3 + 20 * 5}px`,
    justifyContent: 'space-around',
    backgroundColor: 'orange'
  };
  return (
    <div style={style} className="orange rectangle">
      <BlueSquare />
      <BlueSquare />
      <BlueSquare />
    </div>
  );
}

export default OrangeRectangle;
