import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleOnClick = (e) => {
    setTimeout(() => {
      e.persist();
      this.props.onDelayedClick(e);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleOnClick}>Delayed</button>
    )
  }
}

// This component takes two props: onDelayedClick (a function), and delay (a number).