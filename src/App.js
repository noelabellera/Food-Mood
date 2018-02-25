import React, { Component } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Food Mood</h1>
        <LoginPage />
      </div>
    );
  }
}

export default App;
