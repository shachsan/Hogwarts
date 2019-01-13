import React, { Component } from "react";
import "./App.css";
import NavContainer from "./Containers/NavContainer";
import CharacterContainer from './Containers/CharacterContainer';
import HouseContainer from './Containers/HouseContainer';

class App extends Component {

  constructor() {
    super()

    this.state=({
      characters:[],
      filterCharacters:[],
      houses:[],
      editInputValue:'',
      searchValue:'',
    })
  }

  searchChgHandler = (e) => {
    console.log("e.target",e.target.value);
    console.log("state",this.state.searchValue);
    this.setState({searchValue:e.target.value})
    const newCharacters=[...this.state.characters].filter(character=>
      (character.name.toLowerCase().includes(e.target.value.toLowerCase()) || character.house.toLowerCase().includes(e.target.value.toLowerCase())))
    this.setState({filterCharacters:newCharacters})
  }

  clickHandlerForHouseChange=(e, char) => {
    e.preventDefault();
    const newChars = [...this.state.characters]
    newChars.forEach(character=>{
      if(character===char)
        character.house=this.state.editInputValue;
    })

    this.setState({characters:newChars})

  }

  setEditInput =(e) => {
    this.setState({
      editInputValue:e.target.value
    })
  }

  componentDidMount() {
    fetch('http://localhost:3001/characters')
      .then(res=>res.json())
      .then(characters=>this.setState({characters:characters, filterCharacters:characters}))

    fetch('http://localhost:3001/houses')
      .then(res=>res.json())
      .then(houses=>this.setState({houses:houses}))
  }

  render() {
    return (
      <div className="app">
        <div className="character-nav-wrap">
          <CharacterContainer className='class-container' setEditInput={this.setEditInput} 
                              editInputValue={this.state.editInputValue} 
                              filterCharacters={this.state.filterCharacters}
                              clickHandlerForHouseChange={this.clickHandlerForHouseChange}/>
          <NavContainer searchChgHandler={this.searchChgHandler} searchValue={this.state.searchValue}/>
        </div>

        <div className="houseContainer">
          <HouseContainer houses={this.state.houses} characters={this.state.characters}/>
        </div>

      </div>
    );
  }
}

export default App;
