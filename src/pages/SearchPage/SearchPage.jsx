import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './SearchPage.css';


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: 0
        }
    }

    componentDidMount() {
        console.log("this is the searchpage component");
    }

    render() {
        return(
            <div>
                <h3>This is the search up page</h3>
                <SearchForm />
            </div>
        )
    }
}

export default SearchPage;
