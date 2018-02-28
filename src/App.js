import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import NavBar from './components/NavBar/NavBar';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import EightBallPage from './pages/EightballPage/EightballPage';



class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        zip: ''
      }
  }
  

  /*--- Helper Methods ---*/

 updateZipcode = (e) => {
     this.setState({
         zip: e.target.value
     })
 }
  /*--- Callback Methods ---*/


  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout()
    this.setState({user: null});
  }
  /*--- Lifecycle Methods ---*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }



  render() {
    return (
      <div className="App">
        <NavBar handleLogout={this.handleLogout} user={this.state.user}/>
        <h1>Food Mood</h1>
        <Switch>
          <Route exact path='/signup' render={(props) => 
            <SignupPage 
              {...props}
              handleSignup={this.handleSignup}
            />
          }/>

          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleLogin={this.handleLogin}
            />
          }/>

          <Route exact path='/search' render={(props) => (
            userService.getUser() ?
              <SearchPage 
                {...props}
                zip={this.state.zip}
                handleSearchBTN={this.handleSearchBTN}
                updateZipcode={this.updateZipcode}
              /> 
              :
              <Redirect to='/' />
          )}/>

          <Route exact path='/results' render={(props) => (
            userService.getUser() ?
              <ResultsPage 
                {...props} 
                zip={this.state.zip}
              />
              :
              <Redirect to='/' />
          )}/>

          <Route exact path='/eightball' render={(props) => (
            userService.getUser() ?
            <EightBallPage
              {...props}
            />
            :
            <Redirect to='/' />
          )}/>
        </Switch>

      </div>
    );
  }
}

export default App;
