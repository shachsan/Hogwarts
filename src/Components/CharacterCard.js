import React from "react";
import UpdateForm from "./UpdateForm";
class CharacterCard extends React.Component {
  state = {
    clicked: false
  };

  clickHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return this.props.house ? (
      <React.Fragment>
        <img
          alt=""
          src={this.props.character.image2}
          className="house-image"
          onClick={this.clickHandler}
        />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <p>{this.props.character.name}</p>
        <p onClick={this.clickHandler}>{this.props.character.house}</p>
        {this.state.clicked ? (
          <UpdateForm
            character={this.props.character}
            clickHandler={this.clickHandler}
          />
        ) : null}
        <img alt="" src={this.props.character.image1} className="index-image" />
      </React.Fragment>
    );
  }
}

export default CharacterCard;
