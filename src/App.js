import React from "react";
import Pokemon from "./Pokemon";

import Pikachu from "./assets/pikachu.png";
import Charmander from "./assets/charmander.png";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [
        { name: "Pikachu", img: Pikachu },
        { name: "charmandeR", img: Charmander },
      ],
      input: "",
      display: false,
      index: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  componentDidMount() {
    // axios.get("/pokemons").then((pokemons) => {
    //   this.setState({ pokemons });
    // });
  }

  handleSubmit() {
    const { input, pokemons, index } = this.state;
    const pokemon = pokemons[index];

    if (input.toLowerCase() === pokemon.name.toLowerCase()) {
      this.setState({ display: true });
    } else {
      console.log("PERDI");
    }
  }

  handleInput({ target }) {
    this.setState({
      input: target.value,
    });
  }

  selectPokemon() {
    const len = this.state.pokemons.length;

    this.setState({
      index: Math.floor(Math.random() * len),
      display: false,
      input: "",
    });
  }

  // handleNextPokemon() {
  //   const n = this.state.pokemon;
  //   setTimeout(() => {
  //     this.setState((state) => {
  //       return { pokemon: state + 1 };
  //     });
  //   }, 1500);
  // }

  render() {
    return (
      <div className="App">
        <h1>Who's that pokemon!</h1>
        <button onClick={this.selectPokemon}>Next</button>
        <Pokemon
          display={this.state.display}
          input={this.state.input}
          pokemon={this.state.pokemons[this.state.index]}
          onClick={this.handleSubmit}
          handleInput={this.handleInput}
        ></Pokemon>
      </div>
    );
  }
}

export default App;
