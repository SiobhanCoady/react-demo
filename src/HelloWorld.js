import React from 'react';

/*
function HelloWorld(props) {
  // When inlining an object in jsx, do not forget the braces for evaluating
  // js and the braces for declaring the object.
  return <h1 style={{color: 'DeepPink'}}>{`Hello, ${props.name}`}</h1>
  // Babel translates the above into the below
  // return React.createElement('h1', null, `Hello, ${props.name}`)
}
*/

// The below is a class-based version of the functional component above.
class HelloWorld extends React.Component {
  constructor(props) {
    // super(props) must be called in all class-based components. It must also
    // be called before 'this' is mutated.
    // super(props) will call the same named method in the suepr class (or
    // parent class or extended class). i.e. super(props) will call the
    // constructor of React.Component with props as arguments.
    super(props);

    // state is a property of 'this'. It's a plain javascript object that
    // represents the current state of the component (e.g. whether a user is
    // logged in, whether a list item is checked, whether a component is
    // hovered, contains a list of questions queried from the database)
    this.state = {
      hovered: false
    };

    // Everytime you pass a method as a callback, you must bind 'this' to it
    // with the .bind method. Otherwise, 'this' will be null when the method is
    // finally called. In this case, this.hover is the callback for the
    // onMouseEnter prop of the h1 below.
    this.hover = this.hover.bind(this);
    this.unHover = this.unHover.bind(this);
  }

  hover() {
    // this.setState method is used to update the state based on user
    // interactions. It merges the given object with this.state asynchronously
    // (at React's earliest convenience).
    this.setState({hovered: true})
  }

  unHover() {
    this.setState({hovered: false})
  }

  render() {
    const hovered = this.state.hovered;
    return (
      <h1
        onMouseEnter={this.hover}
        onMouseLeave={this.unHover}
        style={{color: 'DeepPink'}}>
        {`${hovered ? 'Hello' : 'Bye'}, ${this.props.name}`}
      </h1>
    )
  }
}

export default HelloWorld;
