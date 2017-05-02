import React from 'react';

function HelloWorld(props) {
  // When inlining an object in jsx, do not forget the braces for evaluating
  // js and the braces for declaring the object.
  return <h1 style={{color: 'DeepPink'}}>{`Hello, ${props.name}`}</h1>
  // Babel translates the above into the below
  // return React.createElement('h1', null, `Hello, ${props.name}`)
}

export default HelloWorld;
