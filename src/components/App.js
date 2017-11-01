import React, { Component } from 'react';
import flashcardlogo from '../images/flashcardlogo.png';
import '../css/App.css';
import FlashCards from './FlashCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={flashcardlogo} className="flashcard-logo" alt="logo" />
          <h2>React Flash Cards</h2>
        </div>
        <FlashCards />
      </div>
    );
  }
}

export default App;
