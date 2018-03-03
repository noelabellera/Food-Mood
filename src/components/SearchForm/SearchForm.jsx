import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
        <div>
            <form>
                <input type="text"
                       placeholder="City"
                       onChange={props.updateCity}
                       value={props.city} /><br/>or<br/>
                <input type="number" 
                       placeholder="Zip Code" 
                       onChange={props.updateZipcode}
                       value={props.zip} /><br/><br/>
                <button onClick={props.handleSearch} className="btn btn-default">SEARCH</button>
            </form>
        </div>
    )
    
}

export default SearchForm;