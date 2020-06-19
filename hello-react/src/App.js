import React, { useState, Component } from "react";
import Hello from "./Hello";
import Clock from "./Clock";
import Counter from "./Counter";
import List from "./List";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      prenom: 'Toto',
      // todos: []
    };
  }
  render() {
    return (
      <div className="App">
        <Hello name={this.state.prenom} />
        <Hello name="Romain" />
        <Hello name="Test" />
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {!this.state.show ? "On" : "Off"}
        </button>
        {this.state.show && <Clock />}
        <Counter />
        <Counter />
        <List items={["Rouge", "Vert", "Bleu"]} />
        <Form prenom={this.state.prenom} onNewPrenom={(text) => this.setState({prenom: text})} />
      </div>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true,
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Hello name="Romain" />
//         <button onClick={() => this.setState({ show: !this.state.show })}>
//           {!this.state.show ? "On" : "Off"}
//         </button>
//         {this.state.show && <Clock />}
//         <Counter />
//         <List items={["Rouge", "Vert", "Bleu"]} />
//         <Form />
//       </div>
//     );
//   }
// }

// function App() {
//   const [show, activate] = useState(true);

//   return (
//     <div className="App">
//       <Hello name="Romain" />
//       <button onClick={() => activate(!show)}>{!show ? "On" : "Off"}</button>
//       {show && <Clock />}
//       <Counter />
//       <List items={['Rouge', 'Vert', 'Bleu']} />
//       <Form />
//     </div>
//   );
// }

export default App;
