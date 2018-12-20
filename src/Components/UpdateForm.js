import React from "react";

class UpdateForm extends React.Component {
  state = {
    value: this.props.character.house
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <form onSubmit={() => {}}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="HufflePuff">HufflePuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UpdateForm;
