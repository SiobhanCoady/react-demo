import React from 'react';
import Shape from './Shape';

export function Square(props) {
  const { color = 'blue' } = props;

  return <Shape {...props} color={color} />
}

export function BlueSquare(props) {
  // Using {...props} inside a jsx element will pass all the properties of
  // props as props of that element.
  return <Square color="blue" {...props} />
}

export default Square;
