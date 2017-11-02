import React from 'react';

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAnswer: false };
  }

  displayBack = () => {
    if(this.state.showAnswer) {
      return(
        <h3>
          <i>Answer: { this.props.card.back } </i>
        </h3>
      )
    }
  }

  toggleAnswer = () => {
    // figure out how to toggle the set answer state
    this.setState({ showAnswer: !this.state.showAnswer });
  }

  render() {
    let { title, front, back } = this.props.card;

    return(
      <div>
        <hr />
        <h1>{ title }</h1>
        <p> { this.state.showAnswer === false ? front : null } </p>
        { this.displayBack() }
        <button onClick={this.toggleAnswer}>Toggle Answer</button>
        <hr />
      </div>
    );
  }
}

export default FlashCard;
        