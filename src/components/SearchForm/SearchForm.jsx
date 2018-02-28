import React from 'react';
// import { Link } from 'react-router-dom';


const SearchForm = (props) => {
    return (
        <div>
            <form>
                <input type="number" 
                       placeholder="Zip Code" 
                       onChange={props.updateZipcode}
                       value={props.zip} />
                <button onClick={props.handleSearch}>SEARCH</button>
            </form>
        </div>
    )
    
}

export default SearchForm;