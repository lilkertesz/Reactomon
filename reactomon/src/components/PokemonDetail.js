import React, { Component } from "react";

export default class PokemonDetail extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    url: `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`,
  };

  componentDidMount() {
    fetch(this.state.url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <div>Experience: {this.state.items.base_experience}</div>
        <div>Height: {this.state.items.height}</div>
        <div>Weight: {this.state.items.weight}</div>
      </div>
    );
  }
}
