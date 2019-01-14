import React from "react";

class House extends React.Component{
  state={
    houseImageClicked:false,
    character:'',
    toggleEdit:false
  }


  setToggleEdit=() => {
    this.setState({
      toggleEdit:!this.state.toggleEdit
    })
  }

changeHouse=(character) => {
  return (
      <form onSubmit={(e)=>{this.props.clickHandlerForHouseChange(e,character); this.setToggleEdit();}}>
        <label>Enter New House:</label>
        {console.log(this)}
        <input type='text' name='newHouse'
                value={this.props.editInputValue} 
                onChange={(e)=>this.props.setEditInput(e)}/>
        <input type='submit' value='Update'/>
      </form>
  )
}

setHouseImgClicked=(e,character) => {
  this.setState({
    houseImageClicked:!this.state.houseImageClicked,
    character:character
  })
  
}

getImage2=(house, characters) => {
  return characters.map((character)=>{
    if(character.house===house)
      return (
          <div  key={character.id} className='house-img-div'>
            <img className='house-image'
                  src={character.image2} alt='house'
                  onClick={(e)=>this.setHouseImgClicked(e,character)}/>
          </div>
      )
  })
}

render(){
      return (
        <div className='house'>
          <h1>{this.props.house}</h1>
          
              {this.getImage2(this.props.house,this.props.characters)}
              {this.state.houseImageClicked ? 
                <ul className='character-detail'>
                    <li>Name:{this.state.character.name}</li>
                    <li>Age:{this.state.character.age}</li>
                    <li>Role:{this.state.character.role}</li>
                    <li><a href="#" onClick={()=>this.setToggleEdit()}>House:{this.state.character.house}</a></li>
                    {this.state.toggleEdit ? this.changeHouse(this.state.character) : null }

                </ul> : null
              }
          
        </div>
      )
  }

}

export default House;
