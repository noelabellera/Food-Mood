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
import API from './api';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      city: '',
    }
  }


  /*--- Helper Methods ---*/

  updateZipcode = (e) => {
    this.setState({
      zip: e.target.value,
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
    API.fetchWeather(this.state.zip)
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
      

      

  }

  /*--- Lifecycle Methods ---*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
    fetch('/').then(data => console.log(data))
    
  }



  render() {
    return (
      <div className="App">
        <NavBar handleLogout={this.handleLogout} user={this.state.user} />
        <h1 className="Title">Food Mood</h1><br/>
        <Switch>
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
