import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'a1', name: 'Tony'},
      {id: 'a2', name: 'Sue'},
      {id: 'a3', name: 'Harvey'}
    ],
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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

  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {


    const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'blue'};
      padding: 20px;
      &:hover{
        background-color: red;
      }
    `

    let persons = null;

    if(this.state.showPerson){
      persons = (
      <div>
        {this.state.persons.map((person, idx) => {
          return <Person 
          name={person.name}
          age={person.age} 
          key={person.id}
          click={() => this.deletePersonHandler(idx)}/>
          
        })} 
      </div>
      )

    }

    return (
      <div className="App">
        <h1>Hello Le Family</h1>

        <StyledButton onClick={this.togglePerson}>Show Viet Name</StyledButton>

        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi Harvey!!!'));
  }
}

export default App;
