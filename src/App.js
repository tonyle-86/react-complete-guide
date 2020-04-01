import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Tony'},
      {name: 'Sue'},
      {name: 'Harvey'}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: 
        [
          { name: newName },
          { name: 'Suong' },
          { name: 'Huy' }
        ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:
        [
          { name:  event.target.value },
          { name: 'Suong' },
          { name: 'Huy' }
        ]
    });

  }

  render() {
    const style = {
      backgroundColor: 'red',
    }

    return (
      <div className="App">
        <h1>Hello Le Family</h1>
        <Person click={this.switchNameHandler} name={this.state.persons[0].name} nationality="North Vietnamese" changed={this.nameChangedHandler}>
          <h2 className="h1">I am a boy</h2>
        </Person>
        <Person name={this.state.persons[1].name} nationality="Central Vietnamese">
          <h2 className="h2">I am a girl</h2>
        </Person >
        <Person name={this.state.persons[2].name} nationality="North/Central Vietnamese">
          <h2 className="h2">I am a boy</h2>
        </Person >
        <button style={style} onClick={this.switchNameHandler.bind(this,'Ha')}>Show Viet Name</button>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi Harvey!!!'));
  }
}

export default App;
