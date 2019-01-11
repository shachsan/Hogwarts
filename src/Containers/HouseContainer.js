import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  render() {
    return <ul className="houseContainer">{houses}</ul>;
  }
}
