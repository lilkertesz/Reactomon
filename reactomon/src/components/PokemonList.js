import React, { Component } from "react";

class PokemonList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    url: "https://pokeapi.co/api/v2/pokemon",
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

  componentDidUpdate() {
    this.componentDidMount();
  }

  setNextPage() {
    this.setState({ url: this.state.items.next });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="card-container">
            {items.results.map((item) => (
              <div className="card bg-info" key={item.name}>
                {item.name}
              </div>
            ))}
          </div>
          <button
            className="btn btn-secondary next-page"
            onClick={this.setNextPage.bind(this)}
          >
            Next
          </button>
        </div>
      );
    }
  }
}

export default PokemonList;
