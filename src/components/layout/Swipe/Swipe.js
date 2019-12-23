import React from 'react';
import PropTypes from 'prop-types';

class Swipe extends React.Component {
  boxStyle = {
    width: '80%',
    height: '300px',
    border: '1px solid black',
    background: '#ccc',
    padding: '20px',
    fontSize: ' 1em',
  };

  state = {
    positionX: 0,
    mouseDown: true,
  };

  handleMouseDown = () => {
    this.setState({ mouseDown: true });
  };

  handleMouseUp = e => {
    this.setState({ mouseDown: false });
    this.handleChangeX(e);
  };

  handleChangeX = event => {
    //console.log(event);
    let x = 0;
    let startX = 0;
    let swipePosition = 0;
    const element = document.querySelector('#test');
    const rect = element.getBoundingClientRect();

    if (this.state.mouseDown === true) {
      element.addEventListener('mousemove', e => {
        x = e.clientX - rect.left;
        swipePosition = x - startX;
        console.log('start:', startX);

        console.log('swipePosition:', swipePosition);
        this.setState({ positionX: swipePosition });
      });
    }
    console.log(this.state.mouseDown);
  };

  render() {
    const drag = {
      transform: `translateX(${this.state.positionX})`,
      border: '1px solid red',
    };

    return (
      <div
        id='test'
        style={this.boxStyle}
        onClick={this.handleChangeX}
        onMouseUp={this.handleMouseUp}
      >
        <div style={drag}>
          testdssss
          {this.state.positionX}
          {drag.transform}
        </div>
      </div>
    );
  }
}

export default Swipe;
