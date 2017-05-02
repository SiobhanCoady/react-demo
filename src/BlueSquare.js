import React from 'react';

function BlueSquare(props) {
  const style = {
    height: '100px',
    width: '100px',
    backgroundColor: 'blue'
  };
  return <div style={style} className="blue square"></div>
}

export default BlueSquare;
