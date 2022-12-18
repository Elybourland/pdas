import React from 'react';

const ProfileCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.handle}</p>
    </div>
  )
}

export default ProfileCard;