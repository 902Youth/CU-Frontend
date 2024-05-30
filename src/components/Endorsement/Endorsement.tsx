import React from 'react';
import './Endorsement.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import { DotsThree, HeartStraight, Chat } from "@phosphor-icons/react";
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/Store';

const Endorsement = () => {
  const endorsements = useSelector((state: AppState) => state.endorsements.endorsements);
  const selectedSkill = useSelector((state: AppState) => state.skills.selectedSkill);

  const filteredEndorsements = selectedSkill
    ? endorsements.filter(endorsement => endorsement.skill.includes(selectedSkill))
    : endorsements;

  return (
    <div className='endorsement-container'>
      {filteredEndorsements.map((endorsement) => (
        <div className='endorsement'>
          <div className='endorser'>
            <ProfilePicture name={endorsement.endorsedBy}/>
            <div className='endorser-info'>
              <div className='endorser-details'>
                <p className='endorser-name clickable'>
                  {endorsement.endorsedBy} endorsed You
                </p>
                <p className='posted-date'>2 hrs ago</p>
              </div>
              <div className='endorsement-options'>
                <DotsThree size={32} />
              </div>
            </div>
          </div>
          <div className='message'>
            <div className='message-details'>
              <p>Posted by <span className='endorser-username'>@{endorsement.endorsedBy}</span></p>
            </div>
            <div className='message-content'>
              <p>{endorsement.comment}</p>
            </div>
          </div>
          <div className='stats'>
            <div className='endorsement-stat'>
                <HeartStraight size={18} className='icon'/>
                <p>6 likes</p>
            </div>
            <div className='endorsement-stat'>
              <Chat size={18} className='icon'/>
              <p>2 comments</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Endorsement;