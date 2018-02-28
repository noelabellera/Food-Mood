import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import API from '../../api/api';
import './SearchPage.css';

// const key = process.env.OWM_KEY;
class SearchPage extends Component {

    handleSearchBTN = (e)  => {
        e.preventDefault();
        API.fetchWeather(this.props.zip);
        this.props.history.push('/results')
    }

    render() {
        return(
            <div>
                <h3>ENTER ZIP TO SEE WHERE YOU SHOULD EAT!</h3>
                <SearchForm 
                    handleSearch={this.handleSearchBTN}
                    updateZipcode={this.props.updateZipcode} 
                    zip={this.props.zip}
                />
            </div>
        )
    }
}

export default SearchPage;
