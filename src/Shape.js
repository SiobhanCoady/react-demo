import React from 'react';

export function Shape(props) {
  const {
    color = 'blue',
    type = 'Square'
  } = props;

  const style = {
    height: '100px',
    width: '100px',
    backgroundColor: color,
    borderRadius: type === 'Circle' ? '50%' : '0px'
  };
  return <div style={style} className="shape"></div>
}

export default Shape;
