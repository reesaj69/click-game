import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CharacterCard from './components/CharacterCard';
import './App.css';
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import panthers from "./panthers.json";


class App extends Component {
  state={
    message: "Click an image to begin!",
    score: 0,
    topScore: 0,
    panthers: [],
  }; 

  clickCard = card => {
    let panthers = this.state.panthers;
    let score = this.state.score;
    // If we already clicked this card...
    if (panthers[card.id]) {
      this.setState({
        message: "You already guessed that! Starting over!",
        topScore: Math.max(this.state.score, this.state.topScore),
        panthers: [],
        score: 0,
        
      })
      
    } else {
      panthers[card.id] = true;
      this.setState({
        message: "Good Guess!",
        panthers: panthers,
        score: ++score,
        
      })
    }
  };

  // Render the page
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore} />
        <Jumbotron />
        
          <Wrapper>
            {panthers
              .sort((a, b) => 0.5 - Math.random())
              .map(randomCard => (
                <CharacterCard
                  clickCard={this.clickCard}
                  id={randomCard.id}
                  key={randomCard.id}
                  image={randomCard.image} />))}
          </Wrapper>
        
       
      </div>
    );
  }
}

export default App;
