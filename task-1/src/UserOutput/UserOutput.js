import React from 'react';

const userOutput = (props) => {

    return (
        <div>
            <p>Hello world, my name is {props.name} (aka {props.username}) and I am married To {props.spouse}.</p>
            <p>I also have a baby boy named {props.child}</p>
        </div>
    ) 

}

export default userOutput;