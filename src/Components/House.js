import React from "react";
import CharacterCard from "./CharacterCard";

const House = props => {
  let cards = props.characters.map(char => (
    <CharacterCard key={char.id} character={char} house />
  ));
  return (
    <React.Fragment>
      <h1>{props.house}</h1>
      <li className="house">
        <div className="house-div">{cards}</div>
      </li>
    </React.Fragment>
  );
};

export default House;
