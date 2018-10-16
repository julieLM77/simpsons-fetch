import React, { Component } from 'react';
import './App.css';
import Affichage from './Affichage';


class App extends Component {
  state = {

    results: []


  };

  handleClick = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(results => results.json())
      .then(data => this.setState({
        results: data[0]
      }))
    }
  



  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Afficher</button>
        <Affichage affiche={this.state.results}/>
      </div>
    )

  }
}

export default App;
