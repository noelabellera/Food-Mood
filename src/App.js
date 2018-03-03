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
import API from './api/index';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      city: '',
      temp: '',
      term1: 'soup',
      term2: 'ramen',
      term3: 'udon',
      restaurants: []
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
  /*--- Callback Methods ---*/


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
           })
        }   
    })
      .then(() => () => this.props.history.push("/results"))
      .catch((err) => {
        console.log(err)
    });

    API.fetchYelp((this.state.city || this.state.zip), this.state.term1, this.state.term2, this.state.term3)
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

  /*--- Lifecycle Methods ---*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
  }



  render() {
    return (
      <div className="App">
        <NavBar handleLogout={this.handleLogout} user={this.state.user} resetSearch={this.resetSearch}/>
        <h1 className="Title">Food Mood</h1><br/>
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
            />
          } />

          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleLogin={this.handleLogin}
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
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
