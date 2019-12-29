import React from 'react';

const Input =(props)=>{
  return(
      <div className='input'>
        <input className={props.inputData.isActiveStyle? 'active': ''} value={props.inputData.currentCount}  type="text"/>
      </div>
  )
}
export default Input