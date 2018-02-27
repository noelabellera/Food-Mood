import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            zipcode: null
        }
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log('searching results')
    }

    render() {
        return (
            <div>
                <form>
                    <input type="zipcode" placeholder="Zip Code" />
                    <button onClick={this.handleSearch}>SEARCH</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;