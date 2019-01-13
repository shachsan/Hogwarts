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
      houses:[],
      editInputValue:'',
    })
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
      .then(characters=>this.setState({characters:characters}))

    fetch('http://localhost:3001/houses')
      .then(res=>res.json())
      .then(houses=>this.setState({houses:houses}))
  }

  render() {
    console.log(this.state.houses);
    return (
      <div className="app">
        <CharacterContainer className='class-container' setEditInput={this.setEditInput} 
                            editInputValue={this.state.editInputValue} 
                            characters={this.state.characters}
                            clickHandlerForHouseChange={this.clickHandlerForHouseChange}/>
        <NavContainer />
        <HouseContainer houses={this.state.houses} characters={this.state.characters}/>

      </div>
    );
  }
}

export default App;
