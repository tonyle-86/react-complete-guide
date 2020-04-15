import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: yellow;
    padding: 10px
`;

const person = (props) => {
    
return  (
        <StyledDiv>
        <p onClick={props.click}>My name is {props.name} and I am {props.nationality}</p>
                <div>{props.children}</div>
                <input type="text" onChange={props.changed} value={props.name}/>
            </StyledDiv >
        )
        
}


export default person;