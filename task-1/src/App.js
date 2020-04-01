import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

state = {
  user: {
    username: 'yellowboyVC',
    name: 'Ha',
    spouse: 'Suong',
    child: 'Huy'
  }
}

userNameChangeHandler = (event) => {
  this.setState({
    user: {
      username: event.target.value,
      name: 'Ha',
      spouse: 'Suong',
      child: 'Huy'
    }
  }) 
}

  render() {
    return (
      <div className="App">
        <UserInput changeUsername={this.userNameChangeHandler} currentUsername={this.state.user.username}/>
        <UserOutput username={this.state.user.username} name={this.state.user.name} spouse={this.state.user.spouse} child={this.state.user.child} />
      </div>
    );
  }
}

export default App;
