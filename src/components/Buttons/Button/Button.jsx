import React from 'react';

const Button = (props) => {
    return (
        <button disabled={props.isDisabled} onClick={()=>{props.callbackFunction()}}>{props.title}</button>
    );
}

export default Button;
