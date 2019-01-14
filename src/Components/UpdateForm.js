import React from "react";

class UpdateForm extends React.Component {
  render() {
    return(
      <form onSubmit={(e)=>{this.props.clickHandlerForHouseChange(e,character); this.setToggleEdit();}}>
          <label>Enter New House:</label>
          <input type='text' name='newHouse'
                value={this.props.editInputValue} 
                onChange={(e)=>this.props.setEditInput(e)}/>
          <input type='submit' value='Update'/>
      </form>
    )
  }
}

export default UpdateForm;
