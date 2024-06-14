import { Route, Routes } from "react-router-dom";

import "./ProfileViewNavTabs.css";

const ProfileViewNavTabs: React.FC = () => {
  
  return (
    <div className="profile-view-nav-bar">
      <div className="nav-bar-item">Endorsements</div>
      <div className="nav-bar-item">Experience</div>
      <div className="nav-bar-item">Projects</div>
      <div className="nav-bar-item">Settings</div>
    </div>
  )
};

export default ProfileViewNavTabs;