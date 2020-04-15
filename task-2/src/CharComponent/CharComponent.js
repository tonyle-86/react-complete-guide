import React from 'react';

const charComponent = (props) => {

const style = {
    backgroundColor: 'red',
    display: 'inline-block',
    border: 'solid 1px black',
    padding: '12px'
}

return (
    <p style={style} onClick={props.clicked}>{props.character}</p>
)
}

export default charComponent;