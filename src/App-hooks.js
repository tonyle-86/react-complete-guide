import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = 
    useState({
      persons: 
        [
          { name: 'Tony' },
          { name: 'Sue' },
          { name: 'Harvey' }
        ],
        
    }
  );

  const [other, setOther ] = useState({other: 'werty'});

  console.log(personsState, other)

  const showVietName = () => {
    setPersonsState({
      persons:
        [
          { name: 'Ha' },
          { name: 'Suong' },
          { name: 'Huy' }
        ]
      }
    );
  }

  return (
    
    <div className="App">
      <h1>Hello Le Family</h1>
      <Person name={personsState.persons[0].name} nationality="North Vietnamese">
        <h2 className="h1">I am a boy</h2>
      </Person>
      <Person name={personsState.persons[1].name} nationality="Central Vietnamese">
        <h2 className="h2">I am a girl</h2>
      </Person >
      <Person name={personsState.persons[2].name} nationality="North/Central Vietnamese">
        <h2 className="h2">I am a boy</h2>
      </Person >
      <button onClick={showVietName}>Show Viet Name</button>
    </div>
  );
}

export default app;