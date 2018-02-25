import React, { Component } from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import NavBar from './components/NavBar/NavBar';
import SignupPage from './pages/SignupPage/SignupPage';

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
  /*--- Lifecycle Methods ---*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }



  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/signup' render={(props) => 
            <SignupPage 
              {...props}
              handleSignup={this.handleSignup}
            />
          }/>
        </Switch>

        <h1>Food Mood</h1>
      </div>
    );
  }
}

export default App;
