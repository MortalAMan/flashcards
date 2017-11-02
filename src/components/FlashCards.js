import React from 'react';
import FlashCard from './FlashCard';

class FlashCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [
                            {
                              title: 'Card 1', 
                              front: 'React Method to show HTML', 
                              back: 'The Render Method'
                            },
                            {
                              title: 'Card 2', 
                              front: 'Where do you set state?', 
                              back: 'In the constructor'
                            },
                            {
                              title: 'Card 3', 
                              front: 'What happens EVERY time you set state?', 
                              back: 'The render method gets called'
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
                            },
                            {
                              title: 'Card 6',
                              front: 'What does the .map method do?',
                              back: 'Javascript array map() method creates a new array with the results of calling a provided function on every element in this array.'
                            },
                            {
                              title: 'Card 7',
                              front: 'What is state?',
                              back: 'The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.'
                            },
                            {
                              title: 'Card 8',
                              front: 'What is the DOM?',
                              back: 'Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.'
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