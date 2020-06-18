import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <button
        className="Counter"
        onClick={() => {
          this.handleClick();
        }}
      >
        {this.state.count}
      </button>
    );
  }
}

export default Counter;
