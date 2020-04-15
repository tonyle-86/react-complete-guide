import React from 'react';

const validationComponent = (props) => {

    let validationMessage = 'Text too short';

    if(props.length > 5 ){
        validationMessage = 'Text long enough';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )

}

export default validationComponent;