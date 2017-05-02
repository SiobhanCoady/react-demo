import React from 'react';
import BlueSquare from './BlueSquare';

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
