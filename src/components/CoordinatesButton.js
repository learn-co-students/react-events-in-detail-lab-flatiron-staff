import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (e) => {
    const coords = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}
