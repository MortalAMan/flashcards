import React from 'react';
import FlashCard from './FlashCard';

class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [
                            {
                              title: 'Card 1', 
                              front: 'React Method To Show HTML', 
                              back: 'the render method'
                            },
                            {
                              title: 'Card 2', 
                              front: 'Where do you set state', 
                              back: 'in the constructor'
                            },
                            {
                              title: 'Card 3', 
                              front: 'what happens EVERY time you set state', 
                              back: 'the render method gets called'
                            },
                            {
                              title: 'Card 4',
                              front: 'What is JSX?',
                              back: 'JSX is a preprocessor step that adds XML syntax to JavaScript'
                            },
                            {
                              title: 'Card 5',
                              front: 'What is a component?',
                              back: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.'
                            }
                          ] 
                };
  }

  displayFlashCards = () => {
    return this.state.cards.map( card => {
      return(<FlashCard card={card} />);
    });
  }

  render() {
    return(
      <div>
        { this.displayFlashCards() }
      </div>
    )
  }
}

export default FlashCards;