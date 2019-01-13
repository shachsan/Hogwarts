import React, { Component } from 'react';

export default class NavContainer extends Component{
    render(){
        return(
            <div className='nav-wrapper'>
                <div>
                    <input type='text' 
                        value = {this.props.searchValue}
                        onChange ={(e)=>{this.props.searchChgHandler(e)}} 
                        placeholder='Search Character'>
                    </input><br/>
                    <button className='add-new-char'
                            onClick={(e)=>{this.props.addCharHandler(e)}}
                            >Add New Character
                    </button>
                    <form>
                        <input type='text' name='image1' placeholder='Enter Image1 url'/><br/>
                        <input type='text' name='name' placeholder='Enter Character Name'/><br/>
                        <input type='text' name='age' placeholder='Age'/><br/>
                        <input type='text' name='house' placeholder='House'/><br/>
                        <input type='text' name='roll' placeholder='Roll'/><br/>
                        <input type='text' name='image2' placeholder='Enter Image2 url'/><br/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>

                {

                }
            </div>
        )
    }
}