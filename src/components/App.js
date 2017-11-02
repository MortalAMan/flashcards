import React, { Component } from 'react';
import flashcardlogo from '../images/flashcardlogo.png';
import '../css/App.css';
import FlashCards from './FlashCards';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FlashCards />
      </div>
    );
  }
}

export default App;
