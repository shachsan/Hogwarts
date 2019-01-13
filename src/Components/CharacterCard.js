import React from "react";
import '../App.css';
// import '../Containers/container.css';




class CharacterCard extends React.Component {
  state={
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
  render() {
    return (
      <div className='list'>
        <img className='index-image' src={this.props.character.image1} alt='main'/>
         {/* width='300px' height='250px'/> */}
        <h3>Name:{this.props.character.name}</h3>
        <h3><a href='#' onClick={()=>this.setToggleEdit()}>House: {this.props.character.house} </a></h3>
        {this.state.toggleEdit ? this.changeHouse(this.props.character) : null }
      </div>)
  }
}

export default CharacterCard;
