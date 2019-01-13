import React, {Component} from "react";
import CharacterCard from '../Components/CharacterCard';
// import '../Containers/container.css'

export default class CharacterContainer extends Component {

  

  characterTiles=()=>{
     return this.props.filterCharacters.map(character=>
     <CharacterCard key={character.id} editInputValue={this.props.editInputValue} 
                    setEditInput={this.props.setEditInput} character={character}
                    clickHandlerForHouseChange={this.props.clickHandlerForHouseChange}/>);
    }
  

  render() {
    return (
      <div className='class-container'>
        <h1>Character Container</h1>
          {this.characterTiles()}
      </div>)
  }
}
