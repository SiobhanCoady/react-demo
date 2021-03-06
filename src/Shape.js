import React from 'react';

// export function Shape(props) {
//   const {
//     color = 'blue',
//     type = 'Square'
//   } = props;
//
//   const style = {
//     height: '100px',
//     width: '100px',
//     backgroundColor: color,
//     borderRadius: type === 'Circle' ? '50%' : '0px'
//   };
//   return <div style={style} className="shape"></div>
// }


class Shape extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorIndex: 0
    };

    this.cycleColor = this.cycleColor.bind(this);
  }

  cycleColor() {
    const colorIndex = this.state.colorIndex;

    this.setState({colorIndex: (colorIndex + 1) % this.props.colors.length});
  }

  render() {
    const { color, type = 'Square', colors } = this.props;
    const {colorIndex } = this.state;

    const style = {
      height: '100px',
      width: '100px',
      backgroundColor: color || colors[colorIndex],
      borderRadius: type === 'Circle' ? '50%' : '0px'
    };

    return (
      <div onClick={this.cycleColor} style={style} className="shape"></div>
    )
  }
}

// defaultProps is a property of all components. It can be set to a plain
// javascript object where each property value pair can act as a default for
// props of the same
Shape.defaultProps = {
  colors: ['Magenta', 'Yellow', 'Cyan']
};
// The above would set the array ['Magenta', 'Yellow', 'Cyan'] as the default
// for the colors if it is not given.

export default Shape;
