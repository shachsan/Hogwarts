import React from "react";
import CharacterCard from "../Components/CharacterCard";
export default class CharacterContainer extends React.Component {
  render() {
    let cards = this.props.characters.map(char => {
      return (
        <li key={char.id}>
          <CharacterCard key={char.id} character={char} />
        </li>
      );
    });
    return <ul className="list">{cards}</ul>;
  }
}
