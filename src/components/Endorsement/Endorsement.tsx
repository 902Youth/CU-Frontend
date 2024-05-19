import React from 'react';
import './Endorsement.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { DotsThree, HeartStraight, Chat } from "@phosphor-icons/react";

const Endorsement = () => {
  const endorsements = [
    { name: "Nicole Dakota", postedDate: "2 hrs ago", messageContent: "Body text for a post. Since it's a social app, sometimes it's a hot take, and sometimes it's a question.", likes: 6, comments: 2 },
    { name: "David Kline", postedDate: "2 hrs ago", messageContent: "Body text for a post. Since it's a social app, sometimes it's a hot take, and sometimes it's a question.", likes: 12, comments: 3 },
  ];

  return (
    <div className='endorsement-container'>
      {endorsements.map((endorsement, index) => (
        <div className='endorsement'>
          <div className='endorser'>
            <ProfilePicture name={endorsement.name}/>
            <div className='endorser-top'>
              <div className='endorser-info'>
                <div className='endorser-details'>
                  <p className='endorser-name clickable'>{endorsement.name}</p>
                  <p className='posted-date'>{endorsement.postedDate}</p>
                </div>
                <div className='message-details'>
                  <p>Posted by {endorsement.name}</p>
                </div>
              </div>
              <div className='endorsement-options'>
                <DotsThree size={32} />
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-content'>
              <p>{endorsement.messageContent}</p>
            </div>
          </div>
          <div className='stats'>
            <div className='endorsement-stat'>
                <HeartStraight size={18} className='icon'/>
                <p>{endorsement.likes} likes</p>
            </div>
            <div className='endorsement-stat'>
              <Chat size={18} className='icon'/>
              <p>{endorsement.comments} comments</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Endorsement;