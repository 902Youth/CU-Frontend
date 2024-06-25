import React, { useState } from "react";

import { ProfileQuickView } from "../ProfileQuickView/ProfileQuickView";
import SearchBar from "../Search/SearchBar";
import User from "../ProfileQuickView/User";
import { bgUri, pfpUri } from "./mockData";

import "./Home.css";
import EndorsementFeed from "../Endorsement/EndorsementFeed";

const Home: React.FC = () => {
  const [showMyProfile, setShowMyProfile] = useState<boolean>(true);
  //In this component, I'll use a useSelect or useStoreSelect to get the user, as well as the selected user. If selected user isn't null, I'll set it as the diffUser. If selected user is null or handleMyProfile is clicked, I'll show the current user's profile quick view.

  //Also, I am not passing a userId for this EndorsementFeed because this will get all endorsements that exist. I also need to make a toggle between home and following, so that we can see all endorsements that the user is following
  const [diffUser, setDiffUser] = useState<User>({
    name: "",
    userName: "",
    position: "",
    department: "",
    badge: "",
    endorsements: null,
    skills: [],
    bio: "",
    pfp: "",
    bgPic: "",
  });

  const handleMyProfile = () => {
    setDiffUser({
      name: "",
      userName: "",
      position: "",
      department: "",
      badge: "",
      endorsements: null,
      skills: [],
      bio: "",
      pfp: "",
      bgPic: "",
    });
    setShowMyProfile(true);
  };

  return (
    <div className="home-container">
      <div className="endorsement-feed-wrapper">
        <span className="searchBar">
          <SearchBar />
        </span>
        <EndorsementFeed />
      </div>

      <div className="quick-view-wrapper">
        {showMyProfile ? (
          <ProfileQuickView
            name="Chris Hemsworth"
            position="HR Specialist"
            department={"hr"}
            userName="@ChrisH_72"
            endorsements={15}
            bio="A budding HR specialist looking for a small to medium sized company!"
            skills={["test"]}
            badge="test"
            pfp={pfpUri}
            bgPic={bgUri}
            myProfile={showMyProfile}
          />
        ) : (
          <>
            <p onClick={handleMyProfile}>My profile</p>
            <ProfileQuickView
              name={diffUser.name}
              position={diffUser.position}
              userName={diffUser.userName}
              department={diffUser.department}
              endorsements={diffUser.endorsements}
              bio={diffUser.bio}
              skills={diffUser.skills}
              badge={diffUser.badge}
              pfp={diffUser.pfp}
              bgPic={diffUser.bgPic}
              myProfile={showMyProfile}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
