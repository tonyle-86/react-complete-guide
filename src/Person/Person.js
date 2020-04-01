import React from 'react';
import Person from './Person.css';

const person = (props) => {
    
return  (
            <div className="Person">
        <p onClick={props.click}>My name is {props.name} and I am {props.nationality}</p>
                <div>{props.children}</div>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        )
}


export default person;