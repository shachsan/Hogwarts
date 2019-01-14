import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {


  houseCard=() => {
    return this.props.houses.map(house=>
        <House key={house} house={house} characters={this.props.characters}
               editInputValue={this.props.editInputValue} 
               setEditInput={this.props.setEditInput}
               clickHandlerForHouseChange={this.props.clickHandlerForHouseChange}/>)
  }

  render() {
    return (
        <div className='house-container'>
          <h1 className='house-header' style={{backgroundColor:'#003366'}}>H O U S E S</h1>
          {this.houseCard()}
        </div>
    )
  }
}
