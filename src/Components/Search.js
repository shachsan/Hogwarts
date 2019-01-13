import React from 'react';

const Search =(props) => {
    return (
        <div>
            <input type='text' 
                value = {props.searchValue}
                onChange ={(e)=>{props.searchChgHandler(e)}} 
                placeholder='Search Character'>
            </input>
        </div>
    )
}
export default Search;