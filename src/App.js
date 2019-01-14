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
      formInputs:{
        name:'',
        age:'',
        house:'',
        roll:'',
        image1:'',
        image2:'',
      }
    })
  }

  setFormInputs=(e) => {
    const newFormInputs={...this.state.formInputs}
    console.log('newFormINputs',newFormInputs);
    newFormInputs[e.target.name]=e.target.value
    this.setState({
      formInputs:newFormInputs

    })
  }

  addCharacterHandler=async(e) => {
    e.preventDefault();
    await this.setState({
      filterCharacters:[this.state.formInputs, ...this.state.characters],
      characters:[this.state.formInputs, ...this.state.characters],
      houses:[...this.state.houses, e.target.house.value]
    })
    
    const data=this.state.formInputs;
    // const house=data.house;
    
    console.log(this.state.formInputs.keys);
    this.setState({
      formInputs:{
        name:'',
        age:'',
        house:'',
        roll:'',
        image1:'',
        image2:'',
      }
    })

    fetch('http://localhost:3001/characters',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    })
    // // .then(()=>{
    //     fetch('http://localhost:3001/houses',{
    //     method: 'POST',
    //     headers:{'Content-Type':'application/json'},
    //     body:JSON.stringify(house)
    //   })
    // // })

  }

  searchChgHandler = (e) => {
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

    this.setState({
      characters:newChars,
      // houses:[...this.state.houses, e.target.newHouse.value]
      })

      fetch(`http://localhost:3001/characters/${char.id}`,{
            method: 'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              house:this.state.editInputValue
            })
        }).then(()=>this.setState({editInputValue:''}))

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
                              
          <NavContainer searchChgHandler={this.searchChgHandler} searchValue={this.state.searchValue} 
                        addCharacterHandler={this.addCharacterHandler}
                        formInputs={this.state.formInputs} setFormInputs={this.setFormInputs}/>
                        
        </div>

        <div className="houseContainer">
          <HouseContainer houses={this.state.houses} characters={this.state.characters} 
                          setEditInput={this.setEditInput} 
                          editInputValue={this.state.editInputValue}
                          clickHandlerForHouseChange={this.clickHandlerForHouseChange}/>
        </div>

      </div>
    );
  }
}

export default App;
