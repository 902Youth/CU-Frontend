import React, { useEffect, useRef } from 'react';
import './ProfilePicture.css'

const ProfilePicture = ({ name }) => {
  const profilePicRef = useRef(null);

  const randomProfilePicColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  useEffect(() => {
    const profilePicColor = randomProfilePicColor();
    if (profilePicRef.current) {
      profilePicRef.current.style.backgroundColor = profilePicColor;
    }
  }, []);

  return (
    <>
      <div className='endorser-profile-pic' ref={profilePicRef}>{name[0]}</div>
    </>
  )
}

export default ProfilePicture;