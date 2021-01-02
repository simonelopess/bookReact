import React from 'react';
import './UserOutput.css'
const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>UserName: { props.userName}</p>
    </div>
  );
}

export default UserOutput