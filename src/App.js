import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import NavBar from './components/NavBar/NavBar';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: "TODO Here"
      }
  }
  

  /*--- Helper Methods ---*/

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

          <Route exact path='/search' render={(props) =>
            <SearchPage 
              {...props}
            /> 
          }/>

          <Route exact path='/results' render={(props) => 
            <ResultsPage 
              {...props} 
            />
          }/>
        </Switch>

      </div>
    );
  }
}

export default App;
