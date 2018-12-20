import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer";
import HouseContainer from "./Containers/HouseContainer";

class App extends Component {
  state = {
    characterList: [],
    filteredCharacters: []
  };
  componentDidMount() {
    this.getCharacters();
  }
  getCharacters = () => {
    fetch("http://localhost:3001/characters")
      .then(resp => resp.json())
      .then(characters =>
        this.setState({
          characterList: characters,
          filteredCharacters: characters
        })
      );
  };

  render() {
    return (
      <div className="app">
        <div className="class-container">
          <CharacterContainer characters={this.state.filteredCharacters} />
        </div>
        <HouseContainer characters={this.state.characterList} />
      </div>
    );
  }
}

export default App;
