import React from 'react';

const ProfileCard = ({ title, handle, image }) => {

  return (
    <div>
      <img src={image} alt="pda logo" />
      <h2>{title}</h2>
      <p>{handle}</p>
    </div>
  )
}

export default ProfileCard;