import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import NavBar from './components/NavBar/NavBar';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import EightBallPage from './pages/EightballPage/EightballPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import API from './api/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      city: '',
      temp: '',
      restaurants: [],
      terms: [],
      favorites: []
    }
  }

  /*--- Helper Methods ---*/

  resetSearch = () => {
    this.setState({
      zip: '',
      city: ''
    })
  }

  updateZipcode = (e) => {
    this.setState({
      zip: e.target.value,
    })
  }

  updateCity = (e) => {
    this.setState({
      city: e.target.value,
    })
  }

  handleSignup = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logout()
    this.setState({ user: null });
  }

  handleSearchBTN = (e) => {
    e.preventDefault();
    API.fetchWeather(this.state.zip, this.state.city)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          this.setState({
            zip: '',
            city: ''
          })
        } else {
          this.setState({
            temp: data.main.temp,
            city: data.name,
            description: data.weather[0].description,
          }, () => {
            this.determineTerms()
          })
        }
      })
      .then(() => () => this.props.history.push("/results"))
      .catch((err) => {
        console.log(err)
      });
  }

  handleFavoritesBtn = (n) => {
    const r = this.state.restaurants[n];
    const obj = {
      name: r.name,
      image_url: r.image_url,
      address: r.location.address1,
      state: r.location.state,
      phone: r.display_phone,
      zip: r.location.zip_code,
      url: r.url,
      rating: r.rating,
      city: r.location.city
    }
    userService.saveFavorite(obj)
    .then(updatedFavs => {
      this.setState({
        favorites: updatedFavs
      })
    });
    this.props.history.push('/favorites');
  }

  handleRemoveBtn = (favoriteId) => {
    userService.removeFavorite(favoriteId)
    .then(updateFavs => {
      this.setState({
        favorites: updateFavs
      });
    });
  }

  determineTerms = () => {
    const terms = [];
    if (this.state.temp >= 80) {
      terms.push('sushi', 'salad', 'seafood')
    } else if (this.state.temp >= 65) {
      terms.push('burgers', 'hot dogs', 'sandwiches')
    } else {
      terms.push('ramen', 'udon')
    }
    this.setState({ terms }, () => {
      this.callYelp()
    })
  }

  callYelp = () => {
    API.fetchYelp((this.state.city || this.state.zip), this.state.terms)
      .then(response => response.json())
      .then(d => {
        console.log(d)
        this.setState({
          restaurants: d
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }


  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
  }


  render() {
    return (
      <div className="App">
        <NavBar handleLogout={this.handleLogout} user={this.state.user} resetSearch={this.resetSearch} />
        <h1 className="Title">Food Mood</h1>
        <h3>Powered By  <img className="yelpFusion" src="https://i.imgur.com/EYzGpzZ.png" alt="yelp fusion"/></h3>
        <Switch>
          <Route exact path='/' render={(props) =>
            <HomePage
              {...props}
            />
          } />

          <Route exact path='/about' render={() =>
            <AboutPage />
          } />

          <Route exact path='/signup' render={(props) =>
            <SignupPage
              {...props}
              handleSignup={this.handleSignup}
              resetSearch={this.resetSearch}
            />
          } />

          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleLogin={this.handleLogin}
              resetSearch={this.resetSearch}
            />
          } />

          <Route exact path='/search' render={(props) => (
            userService.getUser() ?
              <SearchPage
                {...props}
                zip={this.state.zip}
                city={this.state.city}
                handleSearchBTN={this.handleSearchBTN}
                updateZipcode={this.updateZipcode}
                updateCity={this.updateCity}
                updateTerms={this.updateTerms}
              />
              :
              <Redirect to='/' />
          )} />

          <Route exact path='/results' render={(props) => (
            userService.getUser() ?
              <ResultsPage
                {...props}
                temp={this.state.temp}
                city={this.state.city}
                zip={this.state.zip}
                description={this.state.description}
                message={this.state.message}
                restaurants={this.state.restaurants}
                resetSearch={this.resetSearch}
                handleFavoritesBtn={this.handleFavoritesBtn}
              />
              :
              <Redirect to='/' />
          )} />

          <Route exact path='/eightball' render={(props) => (
            userService.getUser() ?
              <EightBallPage
                {...props}
              />
              :
              <Redirect to='/' />
          )} />

          <Route exact path='/favorites' render={(props) => (
            userService.getUser() ? 
              <FavoritesPage  
                {...props}
                favorites={this.state.favorites}
                handleRemoveBtn={this.handleRemoveBtn}
              />
              :
              <Redirect to='/' />
          )} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
