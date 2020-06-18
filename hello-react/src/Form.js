import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Bohdanowicz",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.props.onNewPrenom(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Prénom</label>
          <input
            type="text"
            name="prenom"
            value={this.props.prenom}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={this.state.nom}
            onChange={this.handleChange}
          />
        </div>
        <p>Vous avez saisi : {this.state.prenom} </p>
        <div>
          <button>Go</button>
        </div>
      </form>
    );
  }
}

export default Form;
