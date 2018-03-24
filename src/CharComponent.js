import React from 'react';

const Char = (props) => {
    return (
   <div style = {props.inputStyle} onClick = {props.handleClick} >{props.inputCharacter}</div>
    )
}

export default Char;