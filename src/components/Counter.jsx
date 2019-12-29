import React from 'react';
import Input from "./Input/Input";
import Buttons from "./Buttons/Buttons";

const Counter = (props) => {
    return (
        <div>
        <Input inputData={props.counterData.input}/>
        <Buttons buttons={props.counterData.buttons} onInc={props.onIncButton} onReset={props.onResetButton}/>
        </div>
    );
}

export default Counter;
