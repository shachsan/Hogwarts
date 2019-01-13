import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {


  houseCard=() => {
  return this.props.houses.map(house=><House key={house} house={house} characters={this.props.characters}/>)
  }

  render() {
    return (
      <div className="houseContainer">
        <div>
          <p>House</p>
          {this.houseCard()}
        </div>

        <div>

        </div>
      </div>
    )
  }
}
