import React, { Component } from 'react';

const Validation = (props) => {
    return (
    <p>{props.txtLength<5 ? 'Text too short': 'Text long enough'} </p>
    );
}

export default Validation;