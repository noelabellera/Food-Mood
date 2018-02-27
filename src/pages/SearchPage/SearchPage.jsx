import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import API from '../../api/api';
import './SearchPage.css';


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: 90041
        }
    }

    componentDidMount() {
        console.log("this is the searchpage component");
    }

    render() {
        return(
            <div>
                <h3>ENTER ZIP TO SEE WHERE YOU SHOULD EAT!</h3>
                <SearchForm />
            </div>
        )
    }
}

export default SearchPage;
