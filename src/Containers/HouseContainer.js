import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  state = {
    houseList: []
  };

  componentDidMount() {
    this.getHouses();
  }

  getHouses = () => {
    fetch("http://localhost:3001/houses")
      .then(resp => resp.json())
      .then(houses => this.setState({ houseList: houses }));
  };
  render() {
    let houses = this.state.houseList.map(house => {
      let chars = this.props.characters.filter(char => char.house === house);
      return <House key={house} house={house} characters={chars} />;
    });
    return <ul className="houseContainer">{houses}</ul>;
  }
}
