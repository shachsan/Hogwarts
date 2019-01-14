import React from 'react';

class AddCharacter extends React.Component{
    state={
        toggleAddForm:false
    }
    render (){
        return(
        <div>
            <button className='add-new-char'
                    onClick={(e)=>this.setState({toggleAddForm:!this.state.toggleAddForm})}
                    >Add New Character
            </button>
            {this.state.toggleAddForm ? 
                <form onSubmit={(e)=>{this.props.addCharacterHandler(e); this.setState({toggleAddForm:!this.state.toggleAddForm});}}>
                    Name<input type='text' name='name' value={this.props.formInputs.name} onChange={(e)=>this.props.setFormInputs(e)} placeholder='Enter Character Name'/><br/>
                    Age<input type='text' name='age' value={this.props.formInputs.age} onChange={(e)=>this.props.setFormInputs(e)} placeholder='Age'/><br/>
                    Roll<input type='text' name='roll' value={this.props.formInputs.roll} onChange={(e)=>this.props.setFormInputs(e)} placeholder='Roll'/><br/>
                    House<input type='text' name='house' value={this.props.formInputs.house} onChange={(e)=>this.props.setFormInputs(e)} placeholder='House'/><br/>
                    Character Image<input type='text' name='image1' value={this.props.formInputs.image1} onChange={(e)=>this.props.setFormInputs(e)} placeholder='Enter Image1 url'/><br/>
                    House Image<input type='text' name='image2' value={this.props.formInputs.image2} onChange={(e)=>this.props.setFormInputs(e)} placeholder='Enter Image2 url'/><br/>
                    <input id='submit' type='submit' value='Submit'/>
                </form>
            :null}
        </div>
        )
    }
}

export default AddCharacter;