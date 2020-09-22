import React, { Component } from "react";
import PokemonImage from "./PokemonImage";
import { Link } from "react-router-dom";

class PokemonList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    url: "https://pokeapi.co/api/v2/pokemon",
    itemId: null,
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

  setId(url) {
    let id = url.substring(url.length - 2);
    this.setState({ itemId: id });
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
              <div
                className="card bg-info pokelist"
                style={{ width: "150px" }}
                key={item.name}
              >
                <Link to={`/pokemons/${this.state.itemId}`}>
                  <div className="pokefont">{item.name}</div>
                </Link>
                <PokemonImage url={item.url}></PokemonImage>
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
