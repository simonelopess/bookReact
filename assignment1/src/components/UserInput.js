import React from 'react';

const UserInput = (props) =>{
  const inputStyle = {
    border: '2px solid red'
  }
  return (
    <input type="text" onChange={props.changed} value={props.currentName} style={inputStyle}></input>
  );
}

export default UserInput;