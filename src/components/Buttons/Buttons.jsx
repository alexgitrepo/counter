import React from 'react';
import Button from "./Button/Button";

const Buttons = (props) => {
    return (
        <div className="buttons">
           <Button isDisabled={props.buttons[0].isDisabled} callbackFunction={props.onInc} title={props.buttons[0].title}/>
          <Button isDisabled={props.buttons[1].isDisabled} callbackFunction={props.onReset} title={props.buttons[1].title}/>
        </div>
    );
}

export default Buttons;
