import React, { Component } from 'react';
import Search from '../Components/Search';
import AddCharacter from '../Components/AddCharacter';

export default class NavContainer extends Component{
    render(){
        return(
            <div className='nav-wrapper'>
                <Search searchChgHandler={this.props.searchChgHandler} searchValue={this.props.searchValue} />
                <AddCharacter addCharacterHandler={this.props.addCharacterHandler}
                              formInputs={this.props.formInputs}
                              setFormInputs={this.props.setFormInputs}
                />
            </div>
        )
    }
}