import React from 'react';

export function Square(props) {
  // Set default color...
  const { color = 'blue' } = props;
  // The above is syntax sugar for the below
  // const color = props.color !== undefined ? props.color : 'blue';

  const style = {
    height: '100px',
    width: '100px',
    backgroundColor: color
  };
  return <div style={style} className="square"></div>
}

export function BlueSquare(props) {
  // Using {...props} inside a jsx element will pass all the properties of
  // props as props of that element.
  return <Square color="blue" {...props} />
}

export default Square;
