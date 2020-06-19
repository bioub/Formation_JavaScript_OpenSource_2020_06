import React, { Component } from "react";
import style from './Clock.module.css';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      now: new Date(),
    };
  }
  componentDidMount() {
    // juste après que le composant apparaissent dans le DOM
    this._interval = setInterval(() => {
      // on ne modifie pas le state directement
      // this.state.now = new Date();
      // setState fusionne le state avec le précédent
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    // clearInterval(this._interval);
  }
  render() {
    return <div className={style.Host}>{this.state.now.toLocaleTimeString()}</div>;
  }
}

export default Clock;
