import React, { Component } from "react";

class TypeList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    url: "https://pokeapi.co/api/v2/type",
  };

  componentDidMount() {
    fetch(this.state.url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="card-container">
            {items.map((item) => (
              <div className="card bg-info pokefont" key={item.name}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default TypeList;
