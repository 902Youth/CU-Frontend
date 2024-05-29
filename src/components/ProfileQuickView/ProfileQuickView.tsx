import React from 'react'
import './ProfileQuickView.css'

export default function ProfileQuickView(): JSX.Element {
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

            <div className="container-skills">
                <h1>Skills Section</h1>
            </div>

            <div className="container-bio">
                <h3>A budding HR specialist looking for a small to meduim sized company!</h3>
            </div>
        </div>
    );

}