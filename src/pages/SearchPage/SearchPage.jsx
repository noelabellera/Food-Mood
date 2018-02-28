import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
// import API from '../../api/api';
import './SearchPage.css';

// const key = process.env.OWM_KEY;
class SearchPage extends Component {



    handleSearchBTN = (e)  => {
        e.preventDefault();
        this.props.history.push('/results')
    }

    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zip},us&appid=3f8e3f8dbe2c80f35b11701848af707c&units=imperial`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((err) => {
            console.log(err)
        })
        // alert(`the zip is now ${this.zip}`);

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
