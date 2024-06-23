import { Route, Routes } from "react-router-dom";

import "./ProfileViewNavTabs.css";

interface ProfileViewNavTabsProps {
  currPage: string;
  setCurrPage: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileViewNavTabs: React.FC<ProfileViewNavTabsProps> = ({currPage, setCurrPage}) => {

  
  return (
    <div className="profile-view-nav-bar">
      <div
        className="nav-bar-item"
        style={{
          fontWeight: currPage === "endorsements" ? "bold" : "normal",
          color: currPage === "endorsements" ? "black" : "gray"
        }}
        onClick={() => setCurrPage("endorsements")}
      >
        Endorsements
      </div>
      <div
        className="nav-bar-item"
        style={{
          fontWeight: currPage === "experience" ? "bold" : "normal",
          color: currPage === "experience" ? "black" : "gray"
        }}
        onClick={() => setCurrPage("experience")}
      >
        Experience
      </div>
      <div
        className="nav-bar-item"
        style={{
          fontWeight: currPage === "projects" ? "bold" : "normal",
          color: currPage === "projects" ? "black" : "gray"
        }}
        onClick={() => setCurrPage("projects")}
      >
        Projects
      </div>
      <div
        className="nav-bar-item"
        style={{
          fontWeight: currPage === "settings" ? "bold" : "normal",
          color: currPage === "settings" ? "black" : "gray"
        }}
        onClick={() => setCurrPage("settings")}
      >
        Settings
      </div>
    </div>
  )
};

export default ProfileViewNavTabs;