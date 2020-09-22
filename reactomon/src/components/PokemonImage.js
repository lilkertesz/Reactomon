import React, { Component } from "react";

export default class PokemonDetail extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    url: this.props.url,
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
    return (
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.items.id}.png`}
          alt="pokemon"
        ></img>
      </div>
    );
  }
}
