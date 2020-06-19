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
    // let msg;
    // if (this.state.count % 2 === 0) {
    //   msg = <p>Le nombre est pair</p>;
    // }
    return (
      <div className="Counter">
        <button
          className="Counter"
          onClick={($event) => {
            console.log($event.target.className);
            this.handleClick();
          }}
        >
          {this.state.count}
        </button>
        {/* {msg} */}
        {/* {this.state.count % 2 === 0 && <p>Le nombre est pair</p>} */}
        {this.state.count % 2 === 0 ? (
          <p>Le nombre est pair</p>
        ) : (
          <p>Le nombre est impair</p>
        )}
      </div>
    );
  }
}

export default Counter;
