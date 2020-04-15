import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

state = {
  userInput: ''
}

  outputTextLength = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deletCharHandler = (idx) => {
    const text = this.state.userInput.split('');
    text.splice(idx, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})

  }

  

  render() { 

    const charList = this.state.userInput.split('').map((x,idx) => {
      return <CharComponent character={x} key={idx} clicked={() => this.deletCharHandler(idx)}/>

    })

    return (
      <div className="App">
        <input onChange={this.outputTextLength} type="text" value={this.state.userInput} char={this.userInput}/>

        <p>{this.state.userInput}</p>

        <ValidationComponent length={this.state.userInput.length} />


        {charList}
        

      </div>

    );
  }
}

export default App;
