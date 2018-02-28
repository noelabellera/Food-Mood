import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './SearchPage.css';

// const key = process.env.OWM_KEY;
class SearchPage extends Component {

    _handleSearchBTN = (e) => {
        this.props.history.push('/results')
        this.props.handleSearchBTN(e)
    }

    render() {
        return(
            <div>
                <h3>ENTER ZIP TO SEE WHERE YOU SHOULD EAT!</h3>
                <SearchForm 
                    handleSearch={this._handleSearchBTN}
                    updateZipcode={this.props.updateZipcode} 
                    zip={this.props.zip}
                />
            </div>
        )
    }
}

export default SearchPage;
