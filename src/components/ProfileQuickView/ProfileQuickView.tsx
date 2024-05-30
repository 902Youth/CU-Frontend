import React from 'react'
import './ProfileQuickView.css'
import Skills from '../Skills/Skills';

export const ProfileQuickView: React.FC = () => {

    const tempSkills = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'AWS']
    return (
        <div className="container-quickview">
            <div className="container-profile">
                <div className='background-pic'></div>
                <div className='profile-info'>
                    <div className='pfp'></div>
                    <p>Chris Hemsworth</p>
                    <p>@chris12</p>
                    <p>Position</p>
                </div>
                <div className='profile-endorsements'>
                    <p>Badge</p>
                    <p>15 Endorsements</p>
                </div>
            </div>

            <div className="divider"></div>

            <div className="container-skills">
                <Skills skills={tempSkills} />
            </div>

            <div className="divider"></div>

            <div className="container-bio">
                <h3 style={{fontSize: '15px'}}>A budding HR specialist looking for a small to medium sized company!</h3>
            </div>
        </div>
    );

}