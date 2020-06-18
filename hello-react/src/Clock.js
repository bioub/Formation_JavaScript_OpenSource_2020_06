import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      now: new Date(),
    };
    setInterval(() => {
      // on ne modifie pas le state directement
      // this.state.now = new Date();
      // setState fusionne le state avec le précédent
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    return <div className="Clock">{this.state.now.toLocaleTimeString()}</div>;
  }
}

export default Clock;
